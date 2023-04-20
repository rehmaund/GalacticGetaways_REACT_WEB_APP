import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk }
    from "../users/users-thunks.js";
function Profile() {
    const { currentUser } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const save = () => { dispatch(updateUserThunk(profile)); };

    useEffect(async () => {
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
    }, []);

    return (
    <h1>{currentUser.username}</h1>
    ); // see below
}
export default Profile;