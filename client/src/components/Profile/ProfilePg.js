import React, { Component } from "react";
// import Card from "../Card/card";
import BookScraped from "../BookScraped/BookScraped";
import Book from "./image/book.jpeg";
import myAPI from "../../utils/API";

class Profile extends Component {
  state = {
    savedBooks: []
  };

  componentDidMount() {
    this.getBooksHandler();
    this.getClubAndUSer();
  }

  getBooksHandler() {
    myAPI
      .getBooks()
      .then(res => this.setState({ savedBooks: res.data }))
      .catch(err => console.log(err));
  }

  deleteBooksHandler = (event, id) => {
    myAPI
      .deleteBook(id)
      .then(res => this.getBooksHandler())
      .catch(err => console.log(err));
  };

  getClubAndUSer() {
    myAPI
    .searchAllClubs2()
    .then(res =>
      console.log(res.data)
        // .forEach(function(e) {




        //   e.clubMembers.forEach(function(user){

        //     console.log(user);

        //     if (user === localStorage.id_token){
        //       //change the state of 
        //       //show the club name on the page



        //       // res.data.forEach(function (club){
        //       //   console.log(club)
        //       // })




        //     }
        //   })










        // })

    
        
    ).catch(err => console.log(err))
  }

  render() {


    let saved = <p className="text-center">There are no books saved! Go to Search Book page to find a book of your choice</p>;


    if (this.state.savedBooks.length > 0) {
      saved = this.state.savedBooks.map((book, index) => {
        // console.log(book);
        return (

          <BookScraped
            key={book._id}
            bookId={book._id}
            title={book.title}
            author={book.author}
            URL={book.URL}
            preview={book.preview}
            action={this.deleteBooksHandler}
            saveTitle="Delete from saved"
          />

        );
      });
    }



    return (
      <div>
        {/* <hr />
        <hr />
        <hr /> */}
        <h1 className="text-center">Welcome Back</h1>
        <img src={Book} />
        <div className="card">
          <div className="card-body">
            <h1 className="text-center">Saved Clubs</h1>
            <br />
            {savedClubs}
          </div>



        </div>

        <br />

        <div className="card">
        <div  className="card-body">
        <h1 className="text-center">Saved Books</h1>

        <br />
        {saved}
        </div>
        </div>

        
      </div>
    );
  }
}

export default Profile;
