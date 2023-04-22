import React, {useEffect, useState} from "react";
import '../index.css';
import {useDispatch, useSelector} from "react-redux";
import {deleteFlagThunk} from "./flags-thunks";
import {
  deleteCommentThunk,
  findCommentByIdThunk
} from "../detail/comments/comments-thunks";
import {deleteUserThunk, findUserByIdThunk} from "../users/users-thunks";
import Comment from "../detail/comments/comment";
import {Link} from "react-router-dom";
import FlagButton from "./flag-button";

const Flagged = ({flag}, {key}) => {
  const dispatch = useDispatch();
  const removeContent = () => {
    dispatch(deleteCommentThunk(flag.comment._id));
    dispatch(deleteFlagThunk(flag._id));
  }
  const resolveFlag = () => {
    dispatch(deleteFlagThunk(flag._id));
  }
  return(
      <div className="card border-danger">
        <div className="card-header">
          {flag.username && <h5 className="card-title">Flagged by {flag.username}</h5>}
        </div>
        <div className="card-body">
          <div className={`card bg-light bg-opacity-25`}>
            <div className="card-header">
              <Link to={{pathname: `/profile/${flag.comment.username}`}} className="text-decoration-none wd-no-glow">
                <span className="card-title fw-bold me-2 wd-color-white">{`${flag.comment.display_name} : ${flag.comment.username}`}</span>
                <span className={`wd-no-glow ${flag.comment.type === "ALIEN" ? "text-success" : ""} ${flag.comment.type === "HUMAN" ? "text-warning" : ""} ${flag.comment.type === "MODERATOR" ? "text-danger" : ""}`}>
              <i className={`fa ${flag.comment.type === "ALIEN" ? "fa-brands fa-reddit-alien" : ""} ${flag.comment.type === "HUMAN" ? "fa-solid fa-user-astronaut" : ""} ${flag.comment.type === "MODERATOR" ? "fa-solid fa-user-shield" : ""}`}/>
            </span>
              </Link>
            </div>
            <div className="card-body">
              <p className="card-text">{flag.comment.text}</p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-danger float-start" onClick={removeContent}>
            <span className="me-2">Remove</span>
            <i className="fa-regular fa-trash-can"/>
          </button>
          <button className="btn btn-success float-start ms-2" onClick={resolveFlag}>
            <span className="me-2">Resolve</span>
            <i className="fa-solid fa-check"/>
          </button>
        </div>
      </div>
  );
}
export default Flagged;