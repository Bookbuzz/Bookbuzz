import React, { Component } from "react";
import About from "../../components/About/About";
import Wrapper from "../../components/Wrapper";
import "../../components/books.css";

class Home extends Component {
  render() {
    return (
      <div>
        <hr />
        <hr />
        <hr />
        <Wrapper>
          <div className="text-center">
            <h1> Welcome To BookBuzz</h1>

            <p>
              BookBuzz is an application created for users to find new books to
              read, save for later, create book clubs and join clubs based on
              their reading interests. It is a fun interactive app for users to
              connect with others who share the same interest in books. The
              inspiration behind this app was to create a platform for book
              lovers to come together and connect.
            </p>
          </div>
          

          <hr />
          <hr />
          <hr />
          <hr />
          {/* <hr />
          <hr />
          <hr />
          <hr />
          <hr /> */}

          <h3 className="text-center">Our Developers</h3>
          <About />
        </Wrapper>
      </div>
    );
  }
}

export default Home;
