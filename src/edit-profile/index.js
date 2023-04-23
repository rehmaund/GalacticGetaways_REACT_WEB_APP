import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { profileThunk, updateUserThunk }
    from "../users/users-thunks.js";
import "./index.css";

const EditProfile = () => {
    const { user } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(user);
    const dispatch = useDispatch();

    const saveProfileClickHandler = (profile) => {
        dispatch(updateUserThunk(profile));
    }

    useEffect(() => {
        const asyncFn = async () => {
            const { payload } = await dispatch(profileThunk());
            setProfile(payload);
        };
        asyncFn();

    }, []);

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
                                <Link to="/profile/">
                                    <button onClick={saveProfileClickHandler} className="rounded w-50 btn btn-secondary float-end ps-3 pe-3">Save</button>
                                </Link>
                            </div>
                        </div>
                        <div className="d-flex-row mt-5 mb-3">
                            <div className="col-12 border d-flex justify-content-center">
                                <label className="w-25 text-success me-2 mt-1 fw-bold" for="display-name-field">Display name</label>

                                <textarea id="display-name-field" rows="1"
                                    className="form-control mw-75 border-0 wd-textarea ms-1" value={profile.display_name}
                                    onChange={(event) => setProfile(event.target.value)}>
                                </textarea>
                            </div>
                        </div>
                        <div className="d-flex-row mb-5">
                            <div className="col-12 border d-flex justify-content-center align-items-center">
                                <label className="w-25 text-success me-2 mt-1 fw-bold" for="username-field">Username</label>
                                <textarea id="username-field" rows="1"
                                    className="form-control mw-75 border-0 wd-textarea ms-1" value={profile.username}
                                    onChange={(event) => setProfile(event.target.value)}>
                                </textarea>
                            </div>
                        </div>
                        <div className="d-flex-row mt-5 mb-3">
                            <div className="col-12 border d-flex justify-content-center align-items-center">
                                <label className="w-25 text-success me-2 mt-1 fw-bold" for="email-field">Email address</label>
                                <textarea id="email-field" rows="1"
                                    className="form-control mw-75 border-0 wd-textarea ms-1" value={profile.email}
                                    onChange={(event) => setProfile(event.target.value)}>
                                </textarea>
                            </div>
                        </div>
                        <div className="d-flex-row mb-3">
                            <div className="col-12 border d-flex justify-content-center align-items-center">
                                <label className="w-25 text-success me-2 mt-1 fw-bold" for="phone-number-field">Phone number</label>
                                <textarea id="phone-number-field" rows="1"
                                    className="form-control mw-75 border-0 wd-textarea ms-1" value={profile.phone}
                                    onChange={(event) => setProfile(event.target.value)}>
                                </textarea>
                            </div>
                        </div>
                        <div className="d-flex-row mb-5">
                            <div className="col-12 border d-flex justify-content-center align-items-center">
                                <label className="w-25 text-success me-2 mt-1 fw-bold" for="location-field">Location</label>
                                <textarea id="location-field" rows="1" value={profile.location}
                                    className="form-control mw-75 border-0 wd-textarea ms-1"
                                    onChange={(event) => setProfile(event.target.value)}>
                                </textarea>
                            </div>
                        </div>
                        <div className="d-flex-row mt-5 mb-3">
                            <div className="col-12 border d-flex justify-content-center align-items-center">
                                <label className="w-25 text-success me-2 mt-1 fw-bold" for="bio-field">Bio</label>
                                <textarea id="bio-field" rows="auto" value={profile.bio}
                                    className="form-control mw-75 border-0 wd-textarea ms-1"
                                    onChange={(event) => setProfile(event.target.value)}>
                                </textarea>
                            </div>
                        </div>
                        <div className="d-flex-row mb-5">
                            <div className="col-12 border d-flex justify-content-center align-items-center">
                                <label className="w-25 text-success me-2 mt-1 fw-bold" for="bio-field">Wants to visit</label>
                                <textarea id="bio-field" rows="auto" value={profile.wants_visit}
                                    className="form-control mw-75 border-0 wd-textarea ms-1"
                                    onChange={(event) => setProfile(event.target.value)}>
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

export default EditProfileComponent;
