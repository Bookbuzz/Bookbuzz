import React, { Component } from "react";
import YourBookClub from "../../components/BookClub/YourBookClub"; // will be removed from here to its page
import Wrapper from "../../components/Wrapper";
import myAPI from "../../utils/API";

class BookClub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clubid: this.props.match.params.id,
      bookName: "",
      clubName: "",
      meetingDate:""
    };
  }

  componentDidMount() {
  
    this.myclubfunction();
  }

  myclubfunction = () => {
    let clubChangeData = {
      clubid: this.state.clubid
    };


    // console.log(this.state.clubid);

    myAPI
      .searchAllClubs(clubChangeData)
      .then(res =>
        // console.log(res.data[0]),

        this.setState({
          bookName: res.data[0].bookName,
          clubName :res.data[0].clubName,
          meetingDate :res.data[0].meetingDate
        })

        
      )
      .catch(err => console.log(err));
    
  };


  render() {
    return (
      <div>
        <hr />
        <hr />
        <hr />

        <Wrapper>
          <YourBookClub
            key={this.state.clubid}
            clubId={this.state.clubid}
            Book={this.state.bookName}
            Club={this.state.clubName}
            Date={this.state.meetingDate}
            // ClubName={element.clubName}

            //pass the id of the clubpage
          />
        </Wrapper>
      </div>
    );
  }
}

export default BookClub;
