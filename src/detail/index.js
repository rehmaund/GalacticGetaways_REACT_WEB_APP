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
  const likes = 423;
  const recommendations = 272;
  const comments = 12;
  const comment = {
    placeXid: {xid},
    user: {
      username: "john1",
          displayName: "John",
          userType: "MODERATOR",},
    text: "This is a comment",
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
              <div className="row w-100 pt-3">
                <span className="col-4">
                  <i className="fa fa-thumbs-up"/>
                  <span className="ms-2">{likes}</span>
                  <span className="ms-1">Likes</span>
                </span>
                <span className="col-4">
                  <i className="fa fa-star"/>
                  <span className="ms-2">{recommendations}</span>
                  <span className="ms-1">Recommendations</span>
                </span>
              </div>
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-6">
              <h3>{comments} Comments</h3>
              <Comment comment={comment} key={comment.placeXid + comment.user.username}/>
            </div>
          </div>
        </div>}
      </div>
  );
  }

export default Detail;