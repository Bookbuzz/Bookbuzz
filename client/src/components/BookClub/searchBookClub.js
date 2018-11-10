import React from "react";
import "../styles.css";
import myAPI from "../../utils/API";
import SearchResultItem from "../../components/BookClub/searchResultItem";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Button from './Button/Button';
// import BookClubPage from "./YourBookClub";

export default class SearchClubForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      searchClubName: "",
      searchByBookNameByBook: "",

      clubid: "",
      useradd: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // this.setState({ value: event.target.value });
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  addClubHandler = (event, id, name) => {
    event.preventDefault();
    console.log(id, "inside addclubhandler");
    console.log(localStorage.id_token, "local Storage User");
    console.log(name);

    let clubChangeData = {
      clubid: id,
      useradd: localStorage.id_token
    };

    // Here it should search all clubs and validate andf nest the line 57-61(updateclubs)  inside here
    myAPI
      .searchAllClubs(clubChangeData)
      .then(
        res =>
          function(element) {
            // console.log(element.clubMembers);
            console.log(element);

            if (element.clubMembers.length < 1) {
              console.log("adding you to the club");
              myAPI
                .updateClubs(clubChangeData)
                .then(res => console.log(res))
                .catch(err => console.log(err));
            }

            element.clubMembers.forEach(function(e) {
              console.log(e);

              if (localStorage.id_token === e) {
                console.log("You are already a member!");
              } else {
                console.log("Adding you to the club");
                myAPI
                  .updateClubs(clubChangeData)
                  .then(res => console.log(res))
                  .catch(err => console.log(err));
              }
            });
          }
      )
      .catch(err => console.log(err));
  };

  goToClub = (event, id) => {
    let clubQuery = {
      clubid: id,
      useradd: localStorage.id_token
    };

    myAPI
      .searchAllClubs(clubQuery)
      .then(res =>
        res.data.forEach(function(element) {
          console.log(element.clubMembers);

          if (element.clubMembers.length < 1) {
            console.log("Join the club first!");
            // console.log("102$$$",element.clubMembers.length )
          }

          element.clubMembers.forEach(function(e) {
            console.log(e);

            if (clubQuery.useradd === e) {
              console.log("going to club page!!! woot woot");
              // take to the club ID LINK and pass ID as props
            } else {
              console.log("Join the club first!");
            }
          });
        })
      )
      .catch(err => console.log(err));
  };

  handleSubmit(event) {
    event.preventDefault();

    // document.getElementById("display_clubs").innerHTML = "";
    //  console.log("**88",this.state.searchResults );
    this.setState({
      searchResults: []
    });

    let formData2 = {
      searchClubName: this.state.searchClubName,
      searchByBookNameByBook: this.state.searchByBookNameByBook
    };

    // console.log(formData2);

    if (!formData2.searchByBookNameByBook) {
      // console.log("in the no book name");
      myAPI.searchClubsByName(formData2).then(res => {
        // console.log(res.data);
        this.setState({
          searchResults: this.state.searchResults.concat(res.data)
        });
      });
    }
    //end of the search by club name
    else {
      // console.log("book named entered");
      myAPI.searchClubsByBook(formData2).then(res => {
        console.log(res.data);
        this.setState({
          searchResults: this.state.searchResults.concat(res.data)
        });
      });
    }
  }

  render() {
    let searched = <p> There are no book clubs to show</p>;
    if (this.state.searchResults.length > 0) {
      searched = this.state.searchResults.map((club, index) => {
        // console.log(club);
        return (
          <SearchResultItem
            key={club._id}
            clubId={club._id}
            clubName={club.clubName}
            bookName={club.bookName}
            meetingDate={club.meetingDate}
            action={this.addClubHandler}
            action_club={this.goToClub}
            url={"/bookclub/" + club._id}
          />
        );
      });
    }

    return (
      <div>
        <div className="card">
          <div className="card-body">
            <div className="text-center">
              <h1> Search a Book Club</h1>
              <br />
              <form idname="searchClubForm" onSubmit={this.handleSubmit}>
                <p>Please Write Full Club Name</p>
                <p>tHingS arE CasE sEnsItIVe oUt here:</p>
                <label>
                  Search Club Name: {"    "}
                  <input
                    type="text"
                    value={this.state.searchClubName}
                    onChange={this.handleChange}
                    name="searchClubName"
                  />
                </label>
                <br />
                <label>
                  Search Club by Book:
                  <input
                    type="text"
                    value={this.state.searchByBookNameByBook}
                    onChange={this.handleChange}
                    name="searchByBookNameByBook"
                  />
                </label>
                <br />

                <br />

                <input
                  type="submit"
                  value="Submit"
                  className="btn buttonClubCreate"
                />
              </form>
              <div id="display_clubs" className="row" />
              {searched}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
