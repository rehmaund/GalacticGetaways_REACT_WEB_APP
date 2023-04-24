import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { profileThunk, updateUserThunk }
    from "../users/users-thunks.js";
import "./index.css";
import {useNavigate} from "react-router";

const EditProfile = () => {
    const { user } = useSelector((state) => state.user);
    let profile = user;
    const [result, setResult] = useState(null);
    const [username, setUsername] = useState(user.username);
    const [displayName, setDisplayName] = useState(user.display_name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [bio, setBio] = useState(user.bio);
    const [wantsVisit, setWantsVisit] = useState(user.wants_visit);
    const [newLocation, setNewLocation] = useState(user.location);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log("profile", profile);
    console.log("profile.username: ", profile.username);
    const saveProfileClickHandler = async () => {

        profile.username = username;
        profile.display_name = displayName;
        profile.email = email;
        profile.phone = phone;
        profile.bio = bio;
        profile.wants_visit = wantsVisit;
        profile.location = newLocation;
        console.log('profile: ', profile);
        console.log(typeof(profile.username));

        setResult(await dispatch(updateUserThunk(profile)));
        if (result) {
            navigate('/profile');
        }
    }


   // useEffect(() => {
        //const asyncFn = async () => {
            //const { payload } = await dispatch(profileThunk());
            //setProfile(payload);
       // };
      //  asyncFn();

  //  }, []);

    return (
        <>
            <div className="container border border-secondary mx-3">
                <div className="row">
                    <div className="col-xl-2 col-lg-2">
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">

                        <div className="row my-3 me-2">
                            <div className="col-6 mt-2 pt-1 px-4">
                                <h2 className="text-secondary">Edit Profile</h2>
                            </div>
                            <div className="col-6 mt-3">
                                    <button onClick={saveProfileClickHandler} className="rounded w-50 btn btn-secondary float-end ps-3 pe-3">Save</button>
                            </div>
                        </div>
                        <div className="d-flex-row mt-5 mb-3">
                            <div className="col-12 border d-flex justify-content-center">
                                <label className="w-25 text-success me-2 mt-1 fw-bold" htmlFor="display-name-field">Display name</label>

                                <textarea id="display-name-field" rows="1"
                                    className="form-control mw-75 border-0 wd-textarea ms-1" value={displayName}
                                    onChange={(event) => setDisplayName(event.target.value)}>
                                </textarea>
                            </div>
                        </div>
                        <div className="d-flex-row mb-5">
                            <div className="col-12 border d-flex justify-content-center align-items-center">
                                <label className="w-25 text-success me-2 mt-1 fw-bold" htmlFor="username-field">Username</label>
                                <textarea id="username-field" rows="1"
                                    className="form-control mw-75 border-0 wd-textarea ms-1" value={username}
                                    onChange={(event) => setUsername(event.target.value)}>
                                </textarea>
                            </div>
                        </div>
                        <div className="d-flex-row mt-5 mb-3">
                            <div className="col-12 border d-flex justify-content-center align-items-center">
                                <label className="w-25 text-success me-2 mt-1 fw-bold" htmlFor="email-field">Email address</label>
                                <textarea id="email-field" rows="1"
                                    className="form-control mw-75 border-0 wd-textarea ms-1" value={email}
                                    onChange={(event) => setEmail(event.target.value)}>
                                </textarea>
                            </div>
                        </div>
                        <div className="d-flex-row mb-3">
                            <div className="col-12 border d-flex justify-content-center align-items-center">
                                <label className="w-25 text-success me-2 mt-1 fw-bold" htmlFor="phone-number-field">Phone number</label>
                                <textarea id="phone-number-field" rows="1"
                                    className="form-control mw-75 border-0 wd-textarea ms-1" value={phone}
                                    onChange={(event) => setPhone(event.target.value)}>
                                </textarea>
                            </div>
                        </div>
                        <div className="d-flex-row mb-5">
                            <div className="col-12 border d-flex justify-content-center align-items-center">
                                <label className="w-25 text-success me-2 mt-1 fw-bold" htmlFor="location-field">Location</label>
                                <textarea id="location-field" rows="1" value={newLocation}
                                    className="form-control mw-75 border-0 wd-textarea ms-1"
                                    onChange={(event) => setNewLocation(event.target.value)}>
                                </textarea>
                            </div>
                        </div>
                        <div className="d-flex-row mt-5 mb-3">
                            <div className="col-12 border d-flex justify-content-center align-items-center">
                                <label className="w-25 text-success me-2 mt-1 fw-bold" htmlFor="bio-field">Bio</label>
                                <textarea id="bio-field" rows="auto" value={bio}
                                    className="form-control mw-75 border-0 wd-textarea ms-1"
                                    onChange={(event) => setBio(event.target.value)}>
                                </textarea>
                            </div>
                        </div>
                        <div className="d-flex-row mb-5">
                            <div className="col-12 border d-flex justify-content-center align-items-center">
                                <label className="w-25 text-success me-2 mt-1 fw-bold" htmlFor="bio-field">Wants to visit</label>
                                <textarea id="bio-field" rows="auto" value={wantsVisit}
                                    className="form-control mw-75 border-0 wd-textarea ms-1"
                                    onChange={(event) => setWantsVisit(event.target.value)}>
                                </textarea>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2">
                    </div>
                </div>
            </div >
        </>
    );
}

export default EditProfile;
