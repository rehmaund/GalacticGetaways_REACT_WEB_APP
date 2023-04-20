import { createSlice } from "@reduxjs/toolkit";
import {
    loginThunk, logoutThunk, registerThunk,
    profileThunk, updateUserThunk,
} from "./auth-thunks.js";
import axios from "axios";
import {createReducer as userSlice} from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "user",
    initialState: { user: null },
    reducers: {},
    extraReducers: {
        [loginThunk.fulfilled]: (state, { payload }) => {
            state.user = payload;
        }, [registerThunk.fulfilled]: (state, {payload}) => {
            state.user = payload;
        },  [logoutThunk.fulfilled]: (state) => {
            state.user = null;
        },
        [profileThunk.fulfilled]: (state, { payload }) => {
            state.user = payload;
        },
        [updateUserThunk.fulfilled]: (state, { payload }) => {
            state.user = payload;
        }
    },
});
export default authSlice.reducer;