import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {
    userFollowsUser,
    findFollowsByFollowerId,
    findFollowsByFollowedId, userUnfollowsUser,
} from "../following/follows-service.js";
import { findUserByUsername } from "../users/users-service";

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
                <div className="row w-100 mx-0 px-0">
                    <div className="col-12 position-relative px-0">
                        <img className="w-100 rounded" alt="" src={`/images/${profile.type}_banner.png`} />
                        <img className="h-75 position-absolute rounded start-0 bottom-0" alt="" src={`/images/${profile.type}_pfp.jpg`} />
                    </div>
                    <div className="row my-2">
                        <div className="col-4 pt-2 mt-2">
                            <h1 className="fw-bold">{profile.display_name}</h1>
                            <h4 className="text-secondary">@{profile.username}</h4>
                            <h6><span className="fw-bold me-2">{follows.length}</span> Followers</h6>
                            <h6><span className="fw-bold me-2">{following.length}</span> Following</h6>
                        </div>
                        <div className="col-4 position-relative">
                            <div className="position-absolute bottom-0 start-25">
                                <div className={profile.location === "" ? "d-none" : 'd-flex align-items-start'}>
                                    <i className="fa fa-solid fa-location-dot me-3" /><h6>{profile.location}</h6>
                                </div>
                                <h6 className={profile.type === 'MODERATOR' ? '' : 'd-none'}><span className="fw-bold me-2">{profile.actions_taken}</span> Actions Taken</h6>
                                <h6 className={profile.type === 'ALIEN' ? '' : 'd-none'}><span className="fw-bold me-2">{profile.total_likes}</span> Likes</h6>
                                <h6 className={profile.type === 'HUMAN' ? '' : 'd-none'}><span className="fw-bold me-2">{profile.total_recs}</span> Recommendations</h6>
                                <h6><span className="fw-bold me-2">{profile.total_comments}</span> Comments</h6>
                            </div>
                        </div>
                        <div className="col-4 position-relative">
                            {(!profile || (profile && !currentlyFollowing)) && <button onClick={followUser} className="w-50 rounded btn btn-secondary fw-bold position-absolute top-50 end-0" disabled={currentlyFollowing}>Follow</button>}
                            {profile && currentlyFollowing && <button onClick={unfollowUser} className="w-50 rounded btn btn-warning fw-bold position-absolute top-50 end-0">Unfollow</button>}
                        </div>
                    </div>
                    <div className="row my-3 mx-0">
                        <div className="col-8 card bg-secondary">
                            <div className="card-body">
                                <h4 className="card-title">Bio</h4>
                                <p className="card-text">{profile.bio}</p>
                            </div>
                        </div>
                        <div className="col-4 card bg-primary">
                            <div className="card-body">
                                <h4 className="card-title">Wants to visit</h4>
                                <p className="card-text">{profile.wants_visit}</p>
                            </div>
                        </div>
                    </div>
                    {follows && (
                        <div className="row my-3 mx-0">
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
                        <div className="row my-3 mx-0">
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
                    <div className="row my-3 mx-0">
                        <h2>Recent Activity</h2>
                    </div>
                </div>
            </div>
        }
            {/* // <div>
        //     <h1>
        //         <button onClick={followUser} className="btn btn-primary float-end" disabled={currentlyFollowing}>
        //        </button>
        //         {profile && currentlyFollowing && <button onClick={unfollowUser} className="btn btn-warning float-end">UnFollow</button>}                    {currentlyFollowing ? 'Following' : 'Follow'}


        //         {profile && profile.username}'s Profile
        //     </h1>

        //     {profile && (
        //         <div>
        //             <h2>Profile</h2>

        //             <div>
        //                 <h3>{profile.username}</h3>
        //                 <h3>{profile._id}</h3>
        //             </div>
        //         </div>
        //     )}

        //     {follows && (
        //         <div>
        //             <h2>Followers</h2>
        //             <ul className="list-group">
        //                 {follows.map((follow) => (
        //                     <li className="list-group-item" key={follow.follower._id}>
        //                         <button className="btn btn-link" onClick={() => {navigate(`/profile/${follow.follower.username}`)
        //                                                                window.location.reload()}}>
        //                             <h3>{follow.follower.username}</h3>
        //                         </button>
        //                     </li>
        //                 ))}
        //             </ul>
        //         </div>
        //     )}

        //     {following && (
        //         <div>
        //             <h2>Following</h2>
        //             <ul className="list-group">
        //                 {following.map((follow) => (
        //                     <li className="list-group-item" key={follow.followed._id}>
        //                         <button className="h3 btn btn-link" onClick={() => {navigate(`/profile/${follow.followed.username}`)
        //                                                                window.location.reload()}}>
        //                             <h3>{follow.followed.username}</h3>
        //                         </button>
        //                     </li>
        //                 ))}
        //             </ul>
        //         </div>
        //     )}

        //     <div>
        //         <h2>Likes</h2>

        //     </div>
        // </div> */}
        </>
    );
}

export default OtherProfile;
