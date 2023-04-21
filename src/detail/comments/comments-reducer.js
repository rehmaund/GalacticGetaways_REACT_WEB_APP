import {
  addNewCommentThunk,
  deleteCommentThunk, findCommentByIdThunk,
  findCommentsByPlaceIdThunk,
  findCommentsByUserIdThunk,
  getAllCommentsThunk,
  updateCommentThunk
} from "./comments-thunks";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    comments: [],
    loading: false
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    extraReducers: {
        [addNewCommentThunk.pending]:
            (state) => {
                state.loading = true
                state.comments = []
            },
        [addNewCommentThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                // if (!state.comments.includes(payload)) {
                //     state.comments.push(payload)
                // }
            },
        [addNewCommentThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [getAllCommentsThunk.pending]:
            (state) => {
              state.loading = true
              state.comments = []
            },
        [getAllCommentsThunk.fulfilled]:
            (state, { payload }) => {
              state.loading = false
              state.comments = payload
            },
        [getAllCommentsThunk.rejected]:
            (state, action) => {
              state.loading = false
              state.error = action.error
            },
        [findCommentByIdThunk.pending]:
            (state) => {
              state.loading = true
              state.comments = []
            },
        [findCommentByIdThunk.fulfilled]:
            (state, { payload }) => {
              state.loading = false
              state.comments = payload
            },
        [findCommentByIdThunk.rejected]:
            (state, action) => {
              state.loading = false
              state.error = action.error
            },
        [findCommentsByUserIdThunk.pending]:
            (state) => {
              state.loading = true
              state.comments = []
            },
        [findCommentsByUserIdThunk.fulfilled]:
            (state, { payload }) => {
              state.loading = false
              state.comments = payload
            },
        [findCommentsByUserIdThunk.rejected]:
            (state, action) => {
              state.loading = false
              state.error = action.error
            },
        [findCommentsByPlaceIdThunk.pending]:
            (state) => {
              state.loading = true
              state.comments = []
            },
        [findCommentsByPlaceIdThunk.fulfilled]:
            (state, { payload }) => {
              state.loading = false
              state.comments = payload
            },
        [findCommentsByPlaceIdThunk.rejected]:
            (state, action) => {
              state.loading = false
              state.error = action.error
            },
        [deleteCommentThunk.pending]:
            (state) => {
              state.loading = true
            },
        [deleteCommentThunk.fulfilled]:
            (state, { payload }) => {
              state.loading = false
              state.comments = state.comments
              .filter(t => t._id !== payload)
            },
        [deleteCommentThunk.rejected]:
            (state, action) => {
              state.loading = false
              state.error = action.error
            },
        [updateCommentThunk.pending]:
            (state) => {
              state.loading = true
            },
        [updateCommentThunk.fulfilled]:
            (state, { payload }) => {
              state.loading = false
              const commentNdx = state.comments
              .findIndex(t => t._id === payload)
              state.comments[commentNdx] = {
                ...state.comments[commentNdx],
                ...payload
              }
            },
        [updateCommentThunk.rejected]:
            (state, action) => {
              state.loading = false
              state.error = action.error
            },
    },
  reducers: { }
});

export default commentsSlice.reducer;
