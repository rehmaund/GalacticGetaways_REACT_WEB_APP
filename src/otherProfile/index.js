import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    profileThunk,
    updateUserThunk,
} from "../users/users-thunks";
import { useNavigate, useParams } from "react-router";
import { findUserById } from "../users/users-service";
import {
    userFollowsUser,
    findFollowsByFollowerId,
    findFollowsByFollowedId, userUnfollowsUser,
} from "../following/follows-service.js";
import { Link } from "react-router-dom";

function OtherProfile() {
    const { userId } = useParams();
    const { user } = useSelector((state) => state.user);
    console.log(user);
    const [profile, setProfile] = useState(user);
    const [likes, setLikes] = useState([]);
    const [following, setFollowing] = useState([]);
    const [currentlyFollowing, setCurrentlyFollowing] = useState(false);
    const [follows, setFollows] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fetchFollowing = async () => {
        const following = await findFollowsByFollowerId(userId);
        setFollowing(following);
        if (following) {
            console.log(following);
        } else {
            console.log("no following found");
        }
        console.log(following);

    };

    const fetchUser = async () => {
        const response = await findUserById(userId);
        setProfile(response);
    }
    const fetchFollowers = async () => {
        const follows = await findFollowsByFollowedId(userId);
        console.log(follows);
        setFollows(follows);
        console.log("follows in fetch followers:");
        console.log(follows);
        setCurrentlyFollowing(follows.some(follows => follows.follower === user._id && follows.followed === userId));
        console.log(currentlyFollowing);
        if (follows) {
            console.log(follows);
        } else {
            console.log("no follows found");
        }
    };
    /*const fetchLikes = async () => {
        const likes = await findLikesByUserId(profile._id);
        setLikes(likes);
    };*/
    /* const fetchProfile = async (userId) => {
         if (userId) {
             const user = await findUserById(userId);
             setProfile(user);
             return;
         }
         const response = await dispatch(profileThunk());
         setProfile(response.payload);
     };*/
    const loadScreen = async () => {
        // if (!profile) {
        //await fetchProfile(userId);
        // }
        //await fetchLikes();

        await fetchFollowing();
        await fetchFollowers();
    };
    const followUser = async () => {
        await userFollowsUser(user._id, profile._id);
        loadScreen();
    };
    //const updateProfile = async () => {
    //   await dispatch(updateUserThunk(profile));
    //};

    const unfollowUser = async () => {
        await userUnfollowsUser(user._id, profile._id);
        loadScreen();
    };

    useEffect(() => {
        fetchUser();
        loadScreen();
    }, [userId]);
    return (






        <div>
            <h1>
                <button onClick={followUser} className="btn btn-primary float-end" disabled={currentlyFollowing}>
                    {currentlyFollowing ? 'Following' : 'Follow'}
                </button>
                {currentlyFollowing && <button onClick={unfollowUser} className="btn btn-warning float-end">UnFollow</button>}

                Profile {typeof userId !== undefined ? "me" : userId}
            </h1>

            {profile && (
                <div>
                    <h2>Profile</h2>

                    <div>
                        <h3>{profile.username}</h3>
                        <h3>{profile._id}</h3>
                    </div>
                </div>
            )}

            {follows && (
                <div>
                    <h2>Followers</h2>
                    <ul className="list-group">
                        {follows.map((follow) => (
                            <li className="list-group-item">
                                <Link to={`/profile/${follow.follower}`}>
                                    <h3>{follow.follower}</h3>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {following && (
                <div>
                    <h2>Following</h2>
                    <ul className="list-group">
                        {following.map((follow) => (
                            <li className="list-group-item">
                                <Link to={`/profile/${follow.followed}`}>
                                    <h3>{follow.followed}</h3>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div>
                <h2>Likes</h2>

            </div>
        </div>
    );
}

export default OtherProfile;
