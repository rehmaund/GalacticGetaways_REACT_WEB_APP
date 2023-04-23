import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {
    userFollowsUser,
    findFollowsByFollowerId,
    findFollowsByFollowedId, userUnfollowsUser,
} from "../following/follows-service.js";
import {findUserByUsername} from "../users/users-service";

function OtherProfile() {
    const { username } = useParams();
    const { user } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(user);
    const [likes, setLikes] = useState([]);
    const [following, setFollowing] = useState([]);
    const [currentlyFollowing, setCurrentlyFollowing] = useState(false);
    const [follows, setFollows] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fetchFollowing = async () => {
        const following = await findFollowsByFollowerId(profile._id);
        setFollowing(following);
    };
    const fetchUser = async () => {
        console.log(user)
        const response = await findUserByUsername(username);
        setProfile(response);
        console.log(user)
        console.log(response)
        if (user && response && response._id === user._id) {
            navigate('/profile');
        }
    }
    const fetchFollowers = async () => {
        const follows = await findFollowsByFollowedId(profile._id);
        setFollows(follows);
        if (user && profile && user._id !== profile._id) {
            console.log(follows)
            setCurrentlyFollowing(follows.some(
                follows => follows.follower._id === user._id && follows.followed
                    === profile._id));
        }
    };
    /*const fetchLikes = async () => {
        const likes = await findLikesByUserId(profile._id);
        setLikes(likes);
    };*/
    const loadScreen = async () => {
        if (profile._id !== user._id) {
            //await fetchLikes();
            await fetchFollowing();
            await fetchFollowers();
        }
    };
    const followUser = async () => {
        await userFollowsUser(user._id, profile._id);
        loadScreen();
    };
    const unfollowUser = async () => {
        await userUnfollowsUser(user._id, profile._id);
        loadScreen();
    };
    useEffect(() => {
        fetchUser();
    }, [user]);
    useEffect(() => {
        loadScreen();
    }, [navigate, profile]);
    return (
        <> {profile && profile._id !== user._id &&
        <div>
            <h1>
                <button onClick={followUser} className="btn btn-primary float-end" disabled={currentlyFollowing}>
                    {currentlyFollowing ? 'Following' : 'Follow'}
                </button>
                {profile && currentlyFollowing && <button onClick={unfollowUser} className="btn btn-warning float-end">UnFollow</button>}

                {profile && profile.username}'s Profile
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
                            <li className="list-group-item" key={follow.follower._id}>
                                <button className="btn btn-link" onClick={() => {navigate(`/profile/${follow.follower.username}`)
                                                                       window.location.reload()}}>
                                    <h3>{follow.follower.username}</h3>
                                </button>
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
                            <li className="list-group-item" key={follow.followed._id}>
                                <button className="h3 btn btn-link" onClick={() => {navigate(`/profile/${follow.followed.username}`)
                                                                       window.location.reload()}}>
                                    <h3>{follow.followed.username}</h3>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div>
                <h2>Likes</h2>

            </div>
        </div>
        } </>
    );
}

export default OtherProfile;
