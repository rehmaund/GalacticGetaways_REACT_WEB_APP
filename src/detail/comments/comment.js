import {Link} from "react-router-dom";
import {deleteCommentThunk,} from "./comments-thunks";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {profileThunk} from "../../users/users-thunks";
import FlagButton from "../../flag/flag-button";

const Comment = ({comment}, {key}) => {
  const { user } = useSelector((state) => state.user);
  const [currentUser, setCurrentUser] = useState(user);
  const dispatch = useDispatch();
  useEffect( () => {
    const asyncFn = async () => {const { payload } = await dispatch(profileThunk());
      setCurrentUser(payload); };
    asyncFn();
  }, [dispatch]);
  const deleteCommentHandler = (id) => {
    dispatch(deleteCommentThunk(id));
    window.location.reload();
  }
  return(
      <div className={`card mb-4 bg-light bg-opacity-25`}>
        <div className="card-header">
          <Link to={{pathname: `/profile/${comment.username}`}} className="text-decoration-none wd-no-glow">
            <span className="card-title fw-bold me-2 wd-color-white">{`${comment.display_name} : ${comment.username}`}</span>
            <span className={`wd-no-glow ${comment.type === "ALIEN" ? "text-success" : ""} ${comment.type === "HUMAN" ? "text-warning" : ""} ${comment.type === "MODERATOR" ? "text-danger" : ""}`}>
              <i className={`fa ${comment.type === "ALIEN" ? "fa-brands fa-reddit-alien" : ""} ${comment.type === "HUMAN" ? "fa-solid fa-user-astronaut" : ""} ${comment.type === "MODERATOR" ? "fa-solid fa-user-shield" : ""}`}/>
            </span>
          </Link>
          {currentUser && currentUser.username !== comment.username &&
              <FlagButton uid={currentUser._id} username={currentUser.username} comment={comment._id}/>}
          {currentUser && (currentUser.type === "MODERATOR" || comment.username === currentUser.username) &&
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