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

  render() {
    let saved = <p className="text-center">There are no books saved! Go to Search Book page to find a book of your choice</p>;

    if (this.state.savedBooks.length > 0) {
      saved = this.state.savedBooks.map((book, index) => {
        console.log(book);
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

    let savedClubs = <p className="text-center"> No Clubs Saved, go to BookClubs page to search, create and join a book club</p>

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
