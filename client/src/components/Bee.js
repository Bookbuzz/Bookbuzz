import React from "react";
import "./Bee.css";

const Bee = props => (
  <div>
    <div className="bee">
      <img
        src="https://www.w3cplus.com/sites/default/files/blogs/2016/1604/beebody.png"
        class="bee-body"
        alt="we need the bee"
      />
      <img
        src="https://www.w3cplus.com/sites/default/files/blogs/2016/1604/beewing-left.png"
        class="bee-wing-left"
        alt="we need the bee"
      />
      <img
        src="https://www.w3cplus.com/sites/default/files/blogs/2016/1604/beewing-right.png"
        class="bee-wing-right"
        alt="we need the bee"
      />
    </div>
  </div>
);

export default Bee;
