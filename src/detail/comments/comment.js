import React from "react";
import {Link} from "react-router-dom";
import {deleteCommentThunk} from "./comments-thunks";
import {useDispatch} from "react-redux";

const Comment = ({comment}, {key}) => {
  const userType = comment.type;
  const currentUser = {
    username: "jack",
    displayName: "Jack",
    userType: "ALIEN",
  }
  const dispatch = useDispatch();
  const deleteCommentHandler = (id) => {
    dispatch(deleteCommentThunk(id));
  }
  return(
      <div className={`card mb-4 bg-light bg-opacity-25`}>
        <div className="card-header">
          <Link to={{pathname: `/profile/${comment.username}`}} className="text-decoration-none wd-no-glow">
            <span className="card-title fw-bold me-2 wd-color-white">{`${comment.display_name} : ${comment.username}`}</span>
            <span className={`wd-no-glow ${userType === "ALIEN" ? "text-success" : ""} ${userType === "HUMAN" ? "text-warning" : ""} ${userType === "MODERATOR" ? "text-danger" : ""}`}>
              <i className={`fa ${userType === "ALIEN" ? "fa-brands fa-reddit-alien" : ""} ${userType === "HUMAN" ? "fa-solid fa-user-astronaut" : ""} ${userType === "MODERATOR" ? "fa-solid fa-user-shield" : ""}`}/>
            </span>
          </Link>
          {(currentUser.userType === "MODERATOR" || comment.username === currentUser.username) &&
            <button className="btn btn-danger float-end" onClick={() => deleteCommentHandler(comment._id)}>
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