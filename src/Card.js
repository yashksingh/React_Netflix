import React from "react";
import ReactDOM from "react-dom";

const Card = (props) => {
return(
    <div className="ui centered card">
      <div className="image">
        <img src={props.imgsrc} />
      </div>
      <div className="content">
        <a className="header"> {props.sname} </a>
        <div class="meta">
      <a className="yash"> {props.title} </a>
        </div>
      </div>
      <div class="extra content">
        <a href={props.link} target = "_blank">
        <button class="ui button">Watch Now</button>
        </a>
  </div>
    </div>
);
};
export default Card;
