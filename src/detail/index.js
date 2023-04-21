import {useNavigate, useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {getPlaceDetailsThunk} from "../search/search-thunks.js";
import {useDispatch, useSelector} from "react-redux";
import Comment from "./comments/comment";
import {
  addNewCommentThunk,
  findCommentsByPlaceIdThunk,
  getAllCommentsThunk,
} from "./comments/comments-thunks";
import {profileThunk, updateUserThunk} from "../users/users-thunks";

const Detail = () => {
  const xid = useParams().xid;
  const dispatch = useDispatch();
  const {place, loading} = useSelector(state => state.search);
  const {comments, loading: commentsLoading} = useSelector(state => state.comments);
  useEffect(() => {
    dispatch(getPlaceDetailsThunk(xid));
    dispatch(findCommentsByPlaceIdThunk(xid));
  }, [dispatch, xid])
  const numLikes = 423;
  const numRecommendations = 272;
  const numComments = comments.length;
  const { user } = useSelector((state) => state.user);
  const [currentUser, setCurrentUser] = useState(user);
  useEffect( () => {
    const asyncFn = async () => {const { payload } = await dispatch(profileThunk());
      setCurrentUser(payload); };
    asyncFn();
  }, []);
  let [newCommentText, setNewCommentText] = useState('');
  const commentClickHandler = () => {
    const newComment = {
      text: newCommentText,
      uid: currentUser._id,
      username: currentUser.username,
      display_name: currentUser.display_name,
      type: currentUser.type,
      xid: xid,
      name: place.name,
    }
    dispatch(addNewCommentThunk(newComment));
    setNewCommentText('')
    dispatch(findCommentsByPlaceIdThunk(xid));
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
              {currentUser && currentUser.type === "ALIEN" &&
                  <button className="btn btn-primary mt-2">
                  <i className="fa fa-thumbs-up"/>
                  <span className="ms-1">Like</span>
                  </button>}
              {currentUser && currentUser.type === "HUMAN" &&
                <button className="btn btn-primary mt-2">
                <i className="fa fa-star"/>
                <span className="ms-1">Recommend</span>
                </button>}
            </div>
          </div>
          <hr/>
          {!commentsLoading &&
            <div className="row">
            <h3>{numComments} Comments</h3>
            <div className="col-6">
              {comments.map(comment => <Comment comment={comment} key={comment._id}/>)}
            </div>
            <div className="col-6">
              <div className="card border-secondary p-3">
                <h4>Add a new comment!</h4>
                <form>
                  <div className="mb-3">
                    <textarea value={newCommentText}
                              className="form-control"
                              rows="2"
                              placeholder="What do you want to share?"
                              onChange={(event) => setNewCommentText(event.target.value)}/>
                  </div>
                  <button type="submit" className="btn btn-primary"
                          onClick={commentClickHandler}
                  >Submit</button>
                </form>
              </div>
            </div>
          </div>}
        </div>}
      </div>
  );
  }

export default Detail;