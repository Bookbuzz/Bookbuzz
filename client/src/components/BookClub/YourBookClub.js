import React from "react";
import DiscussionItem from "../../components/BookClub/discussionItem";

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
<hr/><hr/><hr/><hr/>

    <div className="row">
      <div className="col s12 m12 rounded">
        <br />
        <h4> All Discussion</h4>

        <div id="disc1">
          {props.Discussion.map(element => {
            return (
              // console.log(element)
              <DiscussionItem discId={element} discussion={element} />
            );
          })}
        </div>
      </div>

      <div className="col s12 m12 rounded">
        <form id="myForm" onSubmit={event => props.action(event)}>
          <label htmlFor="discussionadd">Post Discussion</label>
          <input
            type="textbox"
            name="discussionadd"
            className="form-control"
            id="postDiscussion"
            aria-describedby="disc help"
            required="required"
            onChange={props.handleDiscussionChange}
            placeholder="Post a comment or discussion here"
          />
          <br/>
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
