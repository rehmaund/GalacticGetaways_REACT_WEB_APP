import { createSlice } from "@reduxjs/toolkit";
import {
  createUserThunk,
  getAllUsersThunk,
  findUserByIdThunk,
  findUserByUsernameThunk,
  deleteUserThunk,
  updateUserThunk,
  incrementUserLikesThunk,
  incrementUserRecommendationsThunk,
  incrementUserCommentsThunk,
  incrementUserActionsTakenThunk,
  decrementUserLikesThunk,
  decrementUserRecommendationsThunk,
  decrementUserCommentsThunk, decrementUserActionsTakenThunk,
} from "./users-thunks";


const initialState = {
  users: [],
  loading: false,
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [getAllUsersThunk.pending]:
        (state) => {
          state.loading = true
          state.users = []
        },
    [getAllUsersThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.users = payload
        },
    [getAllUsersThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [createUserThunk.pending]:
        (state) => {
          state.loading = true
        },
    [createUserThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.users.push(payload)
        },
    [createUserThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [deleteUserThunk.pending]:
        (state) => {
          state.loading = true
        },
    [deleteUserThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.users = state.users
          .filter(t => t._id !== payload)
        },
    [deleteUserThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [findUserByIdThunk.pending]:
        (state) => {
          state.loading = true
        },
    [findUserByIdThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.users = payload
        },
    [findUserByIdThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [findUserByUsernameThunk.pending]:
        (state) => {
          state.loading = true
        },
    [findUserByUsernameThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.users = payload
        },
    [findUserByUsernameThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [incrementUserLikesThunk.pending]:
        (state) => {
          state.loading = true
        },
    [incrementUserLikesThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          const userNdx = state.users
          .findIndex((t) => t._id === payload._id)
          state.users[userNdx] = {
            ...state.users[userNdx],
            ...payload
          }
        },
    [incrementUserLikesThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [incrementUserRecommendationsThunk.pending]:
        (state) => {
          state.loading = true
        },
    [incrementUserRecommendationsThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          const userNdx = state.users
          .findIndex((t) => t._id === payload._id)
          state.users[userNdx] = {
            ...state.users[userNdx],
            ...payload
          }
        },
    [incrementUserRecommendationsThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [incrementUserCommentsThunk.pending]:
        (state) => {
          state.loading = true
        },
    [incrementUserCommentsThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          const userNdx = state.users
          .findIndex((t) => t._id === payload._id)
          state.users[userNdx] = {
            ...state.users[userNdx],
            ...payload
          }
        },
    [incrementUserCommentsThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [incrementUserActionsTakenThunk.pending]:
        (state) => {
          state.loading = true
        },
    [incrementUserActionsTakenThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          const userNdx = state.users
          .findIndex((t) => t._id === payload._id)
          state.users[userNdx] = {
            ...state.users[userNdx],
            ...payload
          }
        },
    [incrementUserActionsTakenThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [decrementUserLikesThunk.pending]:
        (state) => {
          state.loading = true
        },
    [decrementUserLikesThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          const userNdx = state.users
          .findIndex((t) => t._id === payload._id)
          state.users[userNdx] = {
            ...state.users[userNdx],
            ...payload
          }
        },
    [decrementUserLikesThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [decrementUserRecommendationsThunk.pending]:
        (state) => {
          state.loading = true
        },
    [decrementUserRecommendationsThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          const userNdx = state.users
          .findIndex((t) => t._id === payload._id)
          state.users[userNdx] = {
            ...state.users[userNdx],
            ...payload
          }
        },
    [decrementUserRecommendationsThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [decrementUserCommentsThunk.pending]:
        (state) => {
          state.loading = true
        },
    [decrementUserCommentsThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          const userNdx = state.users
          .findIndex((t) => t._id === payload._id)
          state.users[userNdx] = {
            ...state.users[userNdx],
            ...payload
          }
        },
    [decrementUserCommentsThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [decrementUserActionsTakenThunk.pending]:
        (state) => {
          state.loading = true
        },
    [decrementUserActionsTakenThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          const userNdx = state.users
          .findIndex((t) => t._id === payload._id)
          state.users[userNdx] = {
            ...state.users[userNdx],
            ...payload
          }
        },
    [decrementUserActionsTakenThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        }
  },
  reducers: { }
});

export default usersSlice.reducer;