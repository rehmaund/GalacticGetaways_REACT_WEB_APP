import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, updateUserThunk }
  from "../users/users-thunks.js";
import { ProfileComponent } from "./profile.js";
import { findFollowsByFollowedId, findFollowsByFollowerId, userFollowsUser } from "../following/follows-service";

function Profile() {
  const { user } = useSelector((state) => state.user);
  const [profile, setProfile] = useState(user);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const [likes, setLikes] = useState([]);
  const [following, setFollowing] = useState([]);
  const [follows, setFollows] = useState([]);

  const fetchFollowing = async () => {
    const following = await findFollowsByFollowerId(profile._id);
    setFollowing(following);
  };
  const fetchFollowers = async () => {
    const follows = await findFollowsByFollowedId(profile._id);
    setFollows(follows);
  };

  useEffect(() => {
    const asyncFn = async () => {
      const { payload } = await dispatch(profileThunk());
      setProfile(payload);
    };
    asyncFn();

  }, []);

  return (
    <div>
      {/* {user ? <h1>{user.username}</h1>: <h1>No user logged in</h1>} */}
      {user ? ProfileComponent(user, likes, following, follows) : <h1>No user logged in</h1>}
    </div>
  );
}
export default Profile;
