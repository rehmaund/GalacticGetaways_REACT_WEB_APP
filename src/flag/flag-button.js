import React from "react";
import '../index.css';
import {createFlagThunk} from "./flags-thunks";
import {useDispatch} from "react-redux";

const FlagButton = (props) => {
  const dispatch = useDispatch();
  const flagHandler = () => {
    const flag = {
      user: props.uid,
      username: props.username,
      comment: props.comment
    }
    dispatch(createFlagThunk(flag));
  }
  return(
      <button className="btn btn-danger float-end" onClick={flagHandler}>
        <span className="me-2">Report</span>
        <i className="fa-regular fa-flag"/>
      </button>
  );
}
export default FlagButton;