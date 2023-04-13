import React from "react";
import {Link} from "react-router-dom";

const Comment = ({comment}, {key}) => {
  const userType = comment.user.userType;
  return(
      <div className={`card mb-4 ${userType === "ALIEN" ? "bg-success" : ""} ${userType === "HUMAN" ? "bg-warning" : ""} ${userType === "MODERATOR" ? "bg-danger" : ""}`}>
        <div className="card-header">
          <span className="card-title h5 me-2">{comment.user.displayName}</span>
          <i className={`fa ${userType === "ALIEN" ? "fa-brands fa-reddit-alien" : ""} ${userType === "HUMAN" ? "fa-solid fa-user-astronaut" : ""} ${userType === "MODERATOR" ? "fa-solid fa-user-shield" : ""}`}/>
        </div>
        <div className="card-body">
          <p className="card-text">{comment.text}</p>
        </div>
      </div>
  );
}
export default Comment;