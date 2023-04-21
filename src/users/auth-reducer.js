import { createSlice } from "@reduxjs/toolkit";
import {
    loginThunk, logoutThunk, registerThunk,
    profileThunk, updateUserThunk,
} from "../users/users-thunks.js";
import axios from "axios";
import {createReducer as userSlice} from "@reduxjs/toolkit";

const initialState = { user: null
};

const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [loginThunk.fulfilled]: (state, { payload }) => {
            state.user = payload;
        },
        [registerThunk.fulfilled]: (state, { payload }) => {
            state.user = payload;
        },
        [registerThunk.rejected]: (state, { error }) => {
            state.error = error.message;
        },
        [logoutThunk.fulfilled]: (state) => {
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