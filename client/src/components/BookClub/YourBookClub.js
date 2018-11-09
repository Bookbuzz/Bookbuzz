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
      </div>

      <div className="col s12 m12 rounded">
        <form>
          <div className="form-group">
            <label htmlFor="postDiscussion">Post Discussion</label>
            <input
              type="textbox"
              name="postDiscussion"
              className="form-control"
              id="postDiscussion"
              aria-describedby="disc help"
              placeholder="Post a comment or discussion here"
              // onChange={this.handleUsernameChanged.bind(this)}
            />
          </div>
          <br />

          <input
            type="submit"
            value="Post Now!"
            className="btn buttonClubCreate"
            onClick={(event) => props.action(event, props.discussions)}
          />
        </form>
      </div>
    </div>
  </div>
);

export default BookClubPage;

//   render() {
//     return (
//       <div className="rounded" style={{ background: "	" }}>
//         <h4>Book Club Name Comes Here</h4>
//         <div className="row">
//           <button className="buttonClubCreate">Club Info</button> {`         `}
//           <button className="buttonClubCreate">Book Info</button> {`         `}
//           <button className="buttonClubCreate">Discussion</button>
//         </div>
//         <div className="row">
//           <div
//             className="col s6 m6 rounded"
//             style={{background: "light blue", color: "#8b4513"}}
//           >
//             <p style={{color: "black"}}> Welcome to Discussion Page </p>

//             <div style={{color: "pink"}}>

//               <br />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
