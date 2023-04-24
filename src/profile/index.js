import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { findFollowsByFollowedId, findFollowsByFollowerId } from "../following/follows-service";
import { Link } from "react-router-dom";
import { findCommentsByUsernameThunk } from "../detail/comments/comments-thunks.js";
import { getPlaceDetailsForListThunk } from "../search/search-thunks";
import ItemColumns from "../item-preview/item-columns";



function Profile() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [commentsList, setCommentsList] = useState([]);
  const [commentedPlaceDetails, setCommentedPlaceDetails] = useState([]);
  let [xidListComments, setXidListComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [following, setFollowing] = useState([]);
  const [follows, setFollows] = useState([]);

  const fetchFollowing = async () => {
    const following = await findFollowsByFollowerId(user._id);
    setFollowing(following);
  };
  const fetchFollowers = async () => {
    const follows = await findFollowsByFollowedId(user._id);
    setFollows(follows);
  };
  const loadScreen = async () => {
    // await fetchLikes();
    await fetchFollowing();
    await fetchFollowers();
  };
  // useEffect(() => {
  //   const asyncFn = async () => {
  //     const { payload } = await dispatch(profileThunk());
  //     setProfile(payload);
  //   };
  //   asyncFn();
  // }, [dispatch]);
  useEffect(() => {
    const getComments = async () => {
      // Find all liked or recommended records
      if (user) {
        const records = await dispatch(findCommentsByUsernameThunk(user.username));
        setCommentsList(records.payload);
      }
    }
    getComments();
  }, [dispatch, user]);

  useEffect(() => {

    if (commentsList.length > 0) {
      console.log("comments List:");
      console.log(commentsList);
      // Extract xid from each record into list of xids where user id is the current user

      let tempArrayComments = [];
      for (let comment of commentsList) {
        if (!tempArrayComments.includes(comment.xid)) {
          tempArrayComments.push(comment.xid);
        }
      }

      console.log("tempArraycomments", tempArrayComments);

      let numRecords = tempArrayComments.length;
      if (numRecords < 6) {
        numRecords = 0;
      } else {
        numRecords = numRecords - 6;
      }

      let xidArrayComments = [];

      for (let i = tempArrayComments.length - 1; i >= numRecords; i--) {
        xidArrayComments.push(tempArrayComments[i]);
      }

      console.log("xidArrayComments");
      console.log(xidArrayComments);

      setXidListComments(xidArrayComments);
    }
  }, [commentsList]);
  useEffect(() => {

    const fetchPlaceDetailsComments = async () => {
      if (!xidListComments || xidListComments.length === 0) return;

      const promisesComments = xidListComments.map(xid => dispatch(getPlaceDetailsForListThunk(xid)));

      const resultsComments = await Promise.all(promisesComments);

      const placeDetailsComments = resultsComments.map(result => result.payload);

      setCommentedPlaceDetails(placeDetailsComments);

    }

    fetchPlaceDetailsComments();

  }, [dispatch, xidListComments]);

  useEffect(() => {
    loadScreen();
  }, [user]);

  return (
    <div>
      {!user && <h1>No user logged in</h1>}
      {user && <div className="row w-100 mx-0 px-0">
        <div className="col-12 position-relative px-0">
          <img className="w-100 rounded" alt="" src={`/images/${user.type}_banner.png`} />
          <img className="h-75 position-absolute rounded start-0 bottom-0" alt="" src={`/images/${user.type}_pfp.jpg`} />
        </div>
        <div className="row my-2">
          <div className="col-4 pt-2 mt-2">
            <h1 className="fw-bold">{user.display_name}</h1>
            <h4 className="text-secondary">@{user.username}</h4>
            <h6><span className="fw-bold me-2">{follows.length}</span> Followers</h6>
            <h6><span className="fw-bold me-2">{following.length}</span> Following</h6>
          </div>
          <div className="col-3 position-relative">
            <div className="position-absolute bottom-0 start-0">
              <div className={user.location === "" ? "d-none" : 'd-flex align-items-start'}>
                <i className="fa fa-solid fa-location-dot me-3" /><h6>{user.location}</h6>
              </div>
              <div className={user.email === "" ? "d-none" : 'd-flex align-items-start'}>
                <i className="fa fa-solid fa-envelope me-3" /><h6>{user.email}</h6>
              </div>
              <div className={user.phone === "" ? "d-none" : 'd-flex align-items-start'}>
                <i className="fa fa-solid fa-phone me-3" /><h6>{user.phone}</h6>
              </div>
            </div>
          </div>
          <div className="col-3 position-relative">
            <div className="position-absolute bottom-0 start-0">
              <h6 className={user.type === 'MODERATOR' ? '' : 'd-none'}><span className="fw-bold me-2">{user.actions_taken}</span> Actions Taken</h6>
              <h6 className={user.type === 'ALIEN' ? '' : 'd-none'}><span className="fw-bold me-2">{user.total_likes}</span> Likes</h6>
              <h6 className={user.type === 'HUMAN' ? '' : 'd-none'}><span className="fw-bold me-2">{user.total_recs}</span> Recommendations</h6>
              <h6><span className="fw-bold me-2">{user.total_comments}</span> Comments</h6>
            </div>
          </div>
          <div className="col-2 position-relative">
            <Link to="/edit-profile/">
              <button className="w-100 rounded btn btn-light fw-bold position-absolute top-50 end-0">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
        <div className="row my-3 mx-0">
          <div className="col-8 card bg-secondary">
            <div className="card-body">
              <h4 className="card-title">Bio</h4>
              <p className="card-text">{user.bio}</p>
            </div>
          </div>
          <div className="col-4 card bg-primary">
            <div className="card-body">
              <h4 className="card-title">Wants to visit</h4>
              <p className="card-text">{user.wants_visit}</p>
            </div>
          </div>
        </div>
        {follows && (
          <div className="mx-0 my-3">
            <h2>Followers</h2>
            <ul className="list-group">
              {follows.map((follow) => (
                <li className="list-group-item" key={follow.follower._id}>
                  <button className="h3 btn btn-link" onClick={() => {
                    navigate(`/profile/${follow.follower.username}`)
                    window.location.reload()
                  }}>
                    <h3>{follow.follower.username}</h3>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {following && (
          <div className="mx-0 my-3">
            <h2>Following</h2>
            <ul className="list-group">
              {following.map((follow) => (
                <li className="list-group-item" key={follow.followed._id}>
                  <button className="h3 btn btn-link" onClick={() => {
                    navigate(`/profile/${follow.followed.username}`)
                    window.location.reload()
                  }}>
                    <h3>{follow.followed.username}</h3>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="row my-3 mx-0 px-0">
          <h2>Recently Commented Places</h2>
          <ItemColumns allContent={commentedPlaceDetails} />
        </div>
      </div>}
    </div>
  );
}
export default Profile;
