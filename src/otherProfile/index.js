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
    findFollowsByFollowedId,
} from "../following/follows-service.js";
import { Link } from "react-router-dom";

function Profile() {
    const { userId } = useParams();
    const { user } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(user);
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
    /*const fetchLikes = async () => {
        const likes = await findLikesByUserId(profile._id);
        setLikes(likes);
    };*/
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
        //await fetchLikes();
        await fetchFollowing();
        await fetchFollowers();
    };
    const followUser = async () => {
        await userFollowsUser(user._id, profile._id);
    };
    const updateProfile = async () => {
        await dispatch(updateUserThunk(profile));
    };

    useEffect(() => {
        loadScreen();
    }, [userId]);
    return (
        <div>
            <h1>
                <button onClick={followUser} className="btn btn-primary float-end">
                    Follow
                </button>
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
                                <Link to={`/profile/${follow.follower._id}`}>
                                    <h3>{follow.follower.username}</h3>
                                    <h3>{follow.follower._id}</h3>
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
                                <Link to={`/profile/${follow.followed._id}`}>
                                    <h3>{follow.followed.username}</h3>
                                    <h3>{follow.followed._id}</h3>
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

export default Profile;
