import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, updateUserThunk }
    from "../users/users-thunks.js";
function Profile() {
    const { user } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const save = () => { dispatch(updateUserThunk(profile)); };
    /*
     const { userId } = useParams();
  const [likes, setLikes] = useState([]);
  const [following, setFollowing] = useState([]);
  const [follows, setFollows] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchFollowing = async () => {
    const following = await findFollowsByFollowerId(profile._id);
    setFollowing(following);
  };
  const fetchFollowers = async () => {
    const follows = await findFollowsByFollowedId(profile._id);
    setFollows(follows);
  };
  const fetchLikes = async () => {
    const likes = await findLikesByUserId(profile._id);
    setLikes(likes);
  };
  const fetchProfile = async () => {
    if (userId) {
      const user = await findUserById(userId);
      setProfile(user);
      return;
    }
    const response = await dispatch(profileThunk());
    setProfile(response.payload);
  };
  const loadScreen = async () => {
    // if (!profile) {
    await fetchProfile();
    // }
    await fetchLikes();
    await fetchFollowing();
    await fetchFollowers();
  };
  const followUser = async () => {
    await userFollowsUser(currentUser._id, profile._id);
  };
  const updateProfile = async () => {
    await dispatch(updateUserThunk(profile));
  };

  useEffect(() => {
    loadScreen();
  }, [userId]);
     */

    useEffect( () => {
        const asyncFn = async () => {const { payload } = await dispatch(profileThunk());
            setProfile(payload); };
        asyncFn();
    }, []);

    return (
        <div>
            {user ? <h1>{user.username}</h1>: <h1>No user logged in</h1>}
        </div>
    ); // see below
}
export default Profile;