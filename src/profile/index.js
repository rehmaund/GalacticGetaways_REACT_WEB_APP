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

    useEffect( () => {
        const asyncFn = async () => {const { payload } = await dispatch(profileThunk());
            setProfile(payload); };
        asyncFn();
    }, []);

    return (
    <h1>{user.username}</h1>
    ); // see below
}
export default Profile;