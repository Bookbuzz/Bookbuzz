import React from "react";

const BookClubPage = props => (
  <div className="rounded" id={props.clubId}>
    <h3>
      {" "}
      <strong>{props.Club}</strong>
    </h3>
    <h5>Book: {props.Book}</h5>
    <h5>
      <strong>Meeting: {props.Date} </strong>{" "}
    </h5>

    <div className="row">
      <div className="col s12 m12 rounded">
        <p> All Discussion</p>
        <div>{props.discussion}</div>
      </div>

      <div className="col s12 m12 rounded">
        <form  id="myForm" onSubmit={(event) => props.action(event)}>
         
            <label htmlFor="discussionadd">Post Discussion</label>
            <input
              type="textbox"
              name="discussionadd"
              className="form-control"
              id="postDiscussion"
              aria-describedby="disc help"
              // value={this.state.value}
              onChange={props.handleDiscussionChange}
              placeholder="Post a comment or discussion here"
            />
               <input
            type="submit"
            value="Post Now!"
            className="btn buttonClubCreate"
           
          />
          <br />
        </form>
      </div>
    </div>
  </div>
);

export default BookClubPage;
