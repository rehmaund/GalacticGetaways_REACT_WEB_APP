import React from "react";
import {Link} from "react-router-dom";

const Comment = ({comment}, {key}) => {
  const userType = comment.user.userType;
  const currentUser = {
    username: "jack",
    displayName: "Jack",
    userType: "ALIEN",
  }
  return(
      <div className={`card mb-4 bg-light bg-opacity-25`}>
        <div className="card-header">
          <Link to={{pathname: `/profile/${comment.user.username}`}}
              className={`text-decoration-none ${userType === "ALIEN" ? "text-success" : ""} ${userType === "HUMAN" ? "text-warning" : ""} ${userType === "MODERATOR" ? "text-danger" : ""}`}>
            <span className="card-title lead fw-bold me-2">{comment.user.displayName}</span>
            <i className={`fa ${userType === "ALIEN" ? "fa-brands fa-reddit-alien" : ""} ${userType === "HUMAN" ? "fa-solid fa-user-astronaut" : ""} ${userType === "MODERATOR" ? "fa-solid fa-user-shield" : ""}`}/>
          </Link>
          {(currentUser.userType === "MODERATOR" || comment.user.username === currentUser.username) &&
            <button className="btn btn-danger float-end">
              <span className="me-2">Delete</span>
              <i className="fa-regular fa-trash-can"/>
            </button>}
        </div>
        <div className="card-body">
          <p className="card-text">{comment.text}</p>
        </div>
      </div>
  );
}
export default Comment;