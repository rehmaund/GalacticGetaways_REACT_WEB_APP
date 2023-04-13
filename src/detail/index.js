import {useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {getPlaceDetailsThunk} from "../search/search-thunks.js";
import {useDispatch, useSelector} from "react-redux";
import Comment from "./comment";

const Detail = () => {
  const xid = useParams().xid;
  const dispatch = useDispatch();
  const {place, loading} = useSelector(state => state.search);
  useEffect(() => {
    dispatch(getPlaceDetailsThunk(xid))
  }, [dispatch, xid])
  const numLikes = 423;
  const numRecommendations = 272;
  const comment1 = {
    id: 1,
    placeXid: {xid},
    user: {
      username: "john",
      displayName: "John",
      userType: "MODERATOR",},
    text: "This is a comment",
  }
  const comment2 = {
    id: 2,
    placeXid: {xid},
    user: {
      username: "jack",
      displayName: "Jack",
      userType: "ALIEN",},
    text: "This is another comment",
  }
  const comment3 = {
    id: 3,
    placeXid: {xid},
    user: {
      username: "jill",
      displayName: "Jill",
      userType: "HUMAN",},
    text: "This is a third comment",
  }
  const comments = [comment1, comment2, comment3];
  const numComments = comments.length;
  const currentUser = {
    username: "jack",
    displayName: "Jack",
    userType: "ALIEN",
  }
  return (
      <div className="">
        {loading && <div>Loading...</div>}
        {place && <div>
          <div className="row">
            {place.preview &&
              <div className="col-4">
                <img className="w-100" src={place.preview.source}/>
              </div>}
            <div className="col-8">
              <h1 className="mb-0">{place.name}</h1>
              {place.address &&
                <h4 className="text-muted">{place.address.city}, {place.address.country}</h4>}
              {place.wikipedia_extracts && <p className="text-secondary">{place.wikipedia_extracts.text}</p>}
              <p className="text-info">Tags: {place.kinds}</p>
              <p className="text-success">Rating: {place.rate}</p>
              <div className="row w-100">
                <span className="col-4">
                  <i className="fa fa-thumbs-up"/>
                  <span className="ms-2">{numLikes}</span>
                  <span className="ms-1">Likes from Aliens</span>
                </span>
                <span className="col-6">
                  <i className="fa fa-star"/>
                  <span className="ms-2">{numRecommendations}</span>
                  <span className="ms-1">Recommendations from Humans</span>
                </span>
              </div>
              {currentUser.userType === "ALIEN" &&
                  <button className="btn btn-primary mt-2">
                    <i className="fa fa-thumbs-up"/>
                    <span className="ms-1">Like</span>
                  </button>}
              {currentUser.userType === "HUMAN" &&
                <button className="btn btn-primary mt-2">
                  <i className="fa fa-star"/>
                  <span className="ms-1">Recommend</span>
                </button>}
            </div>
          </div>
          <hr/>
          <div className="row">
            <h3>{numComments} Comments</h3>
            <div className="col-6">
              {comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
            </div>
            <div className="col-6">
              <div className="card border-secondary p-3">
                <h4>Add a new comment!</h4>
                <form>
                  <div className="mb-3">
                    <textarea className="form-control" rows="2" placeholder="What do you want to share?"/>
                  </div>
                  <button type="submit" className="btn btn-primary"
                          // onSubmit={}
                  >Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>}
      </div>
  );
  }

export default Detail;