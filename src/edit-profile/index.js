import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { profileThunk, updateUserThunk }
    from "../users/users-thunks.js"; import { useSelector, useDispatch } from "react-redux";

const EditProfileComponent = () => {
    const { user } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(user);

    const dispatch = useDispatch();
    // const saveProfileClickHandler = () => {
    //     const savedProfile = {
    //         firstName: currentProfile_firstName,
    //         lastName: currentProfile_lastName,
    //         handle: currentProfile.handle,
    //         profilePicture: currentProfile.profilePicture,
    //         bannerPicture: currentProfile.bannerPicture,
    //         bio: currentProfile_bio,
    //         website: currentProfile_website,
    //         location: currentProfile_location,
    //         dateOfBirth: currentProfile_dateOfBirth,
    //         dateJoined: currentProfile.dateJoined,
    //         followingCount: currentProfile.followingCount,
    //         followersCount: currentProfile.followersCount,
    //         tuitsCount: currentProfile.tuitsCount,
    //     }
    //     dispatch(updateUserThunk(savedProfile));
    // }

    return (
        <>
            <div className="container border mx-2">
                <div className="row my-3">
                    <div className="col-6 mt-2 pt-1">
                        <h5>Edit Profile</h5>
                    </div>
                    <div className="col-6 mt-1">
                        <Link to="/tuiter/profile/">
                            <button className="rounded-pill btn btn-dark float-end ps-3 pe-3 fw-bold" onClick={saveProfileClickHandler}>Save</button>
                        </Link>
                    </div>
                </div>
                <div className="row my-1">
                    <div className="border">
                        <label for="display-name-field">Display name</label>
                        <textarea id="display-name-field" rows="1" value={profile.display_name}
                            className="form-control border-0 p-0"
                            onChange={(event) => setProfile_firstName(event.target.value)}>
                        </textarea>
                    </div>
                </div>
                <div className="row my-1">
                    <div className="border">
                        <label for="username-field">Username</label>
                        <textarea id="username-field" rows="1" value={profile.username}
                            className="form-control border-0 p-0"
                            onChange={(event) => setProfile_lastName(event.target.value)}>
                        </textarea>
                    </div>
                </div>
                <div className="row my-1">
                    <div className="border">
                        <label for="email-field">Email address</label>
                        <textarea id="email-field" rows="1" value={profile.email}
                            className="form-control border-0 p-0"
                            onChange={(event) => setProfile_lastName(event.target.value)}>
                        </textarea>
                    </div>
                </div>
                <div className="row my-1">
                    <div className="border">
                        <label for="phone-number-field">Phone number</label>
                        <textarea id="phone-number-field" rows="1" value={profile.phone}
                            className="form-control border-0 p-0"
                            onChange={(event) => setProfile_lastName(event.target.value)}>
                        </textarea>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="border">
                        <label for="bio-field">Bio</label>
                        <textarea id="bio-field" rows="auto" value={profile.bio}
                            className="form-control border-0 p-0"
                            onChange={(event) => setProfile_bio(event.target.value)}>
                        </textarea>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="border">
                        <label for="location-field" className="text-muted wd-label-small-size">Location</label>
                        <textarea id="location-field" rows="1" value={profile.location}
                            className="form-control border-0 p-0"
                            onChange={(event) => setProfile_location(event.target.value)}>
                        </textarea>
                    </div>
                </div>
            </div>
        </>
    )



}
