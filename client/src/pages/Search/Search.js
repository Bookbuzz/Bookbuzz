import React, { Component } from "react";
// import Container from '../../components/Container/Container';
import SearchForm from '../../components/SearchForm/SearchForm';
import Card from '../../components/Card/card';
import BookScraped from '../../components/BookScraped/BookScraped';
import googleAPI from "../../utils/googleAPI";
import myAPI from "../../utils/API";
import Wrapper from "../../components/Wrapper";

var thumbnailCheck = function (result) {
  if (!result.volumeInfo.imageLinks) {
    return ("https://www.waltercedric.com/media/plg_cedthumbnails/default-300x250.jpg")
  } else {
    return (result.volumeInfo.imageLinks.thumbnail)
  }
}

class Search extends Component {
  state = {
    labels: [
      { id: "Title", val: "" },
      { id: "Author", val: ""},
      { id: "Subject", val: ""}
  ],
    results: [],
    showResults: false,
    error: ""
  }

  handleInputChange = ( event, id ) => {
    const labelIndex = this.state.labels.findIndex(label => label.id === id);
    const label = { ...this.state.labels[labelIndex] };
    label.val = event.target.value;
    const labels = [ ...this.state.labels ];
    labels[labelIndex] = label;
    this.setState({ labels: labels });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    // console.log("I am in handleform submit in searchjs line 32") //working
    
    googleAPI.getBooks(this.state.labels)
      .then(res => {
        console.log(res); //res.data
        console.log("search js", res.data.items);
        this.setState({ 
          labels: [
            { id: "Title", val: "" },
            { id: "Author", val: ""},
            { id: "Subject", val: ""}
          ],
          results: res.data.items,
          showResults: true 
        });
      })
      .catch(err => this.setState({ error: err.message }));
  } 

  handleBookSaved = ( event, id ) => {
    event.preventDefault();
    // console.log("inside the handle article saves in search js EVENT", event);
    
    const bookIndex = this.state.results.findIndex(result => result.id === id);
    const book = { ...this.state.results[bookIndex] };
    console.log("inside the handle book saved in search js, where ID = ", id, " ///// bookIndex = ",bookIndex, " /////& book ", book);
    myAPI.saveBooks({
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors,
      snippet: book.volumeInfo.description,
      preview: book.accessInfo.webReaderLink,
      URL: thumbnailCheck(book)
    })
      .then(res => alert('Book saved successfully!'))
      .catch(err => console.log(err));
  }

  render() {
    let searchResults = "Enter a name of a book.";
    if (this.state.showResults) {
      searchResults = this.state.results.map((book, index) => {
        return <BookScraped
          key={book.id}
          bookId={book.id}
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors}
          snippet={book.volumeInfo.description}
          URL={thumbnailCheck(book)}
          preview={book.accessInfo.webReaderLink}
          action={this.handleBookSaved}
          saveTitle="Save this Book" />
      });
    }
    return (
      <div>
        <hr />
        <hr />
        <hr />
        <Wrapper>
        <Card title="Search for Books">
        <center>
            <div className="stack">
              <div className="book" />
              <div className="book" />
              <div className="book" />
              <div className="book" />
              <div className="book" />
            </div>
          </center>
          <br></br>
        <SearchForm 
          submit={this.handleFormSubmit} 
          changed={this.handleInputChange}
          labels={this.state.labels} />
        </Card>
        <Card title="Top Results">{searchResults}</Card>
        </Wrapper>
      </div>
    );
  }
}

export default Search;
