import React from "react";
import "../styles.css"
import myAPI from "../../utils/API";

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clubName: "",
      bookName: "",
      meetingDate: ""
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

  handleSubmit(event) {
    event.preventDefault();
    console.log(
      "' book club name was submitted: " +
      this.state.clubName +
      " book name " +
      this.state.bookName +
      " meeting date and time " +
      this.state.meetingDate
    );

    let formData = {
      clubName: this.state.clubName,
      bookName: this.state.bookName,
      meetingDate: this.state.meetingDate
    };


    //validate 

    console.log(formData);
    myAPI
      .postClubs(formData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        //Perform action based on error
      });
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
          <div className="text-center">
            <h1> Add a Book Club</h1>
            <br />
            <form idname="addClubForm" onSubmit={this.handleSubmit}>
              <label>
                Club Name: {"    "}
                <input
                  type="text"
                  value={this.state.clubName}
                  onChange={this.handleChange}
                  name="clubName"
                  required="required"
                />
              </label>
              <br />
              <label>
                Selected Book: 
            <input
                  type="text"
                  value={this.state.bookName}
                  onChange={this.handleChange}
                  name="bookName"
                  required="required"
                />
              </label>
              <br />
              <label>
                Meeting Date & Time: 
            <input
                  type="text"
                  value={this.state.meetingDate}
                  onChange={this.handleChange}
                  placeholder="Second Tuesdays 5pm CST"
                  name="meetingDate"
                  required="required"
                />
              </label>
              <br />

              <input type="submit" value="Submit" className="btn buttonClubCreate" />
            </form>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
