import {createSlice} from "@reduxjs/toolkit";
import {
  createInteractionThunk,
  deleteInteractionThunk,
  findInteractionsByPlaceIdThunk,
  findInteractionsByUserIdThunk,
  findSpecificInteractionThunk,
  getAllInteractionsThunk
} from "./interactions-thunks";

const initialState = {
  loading: false,
  interactions: [],
}

export const interactionsReducer = createSlice({
  name: 'interactions',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllInteractionsThunk.pending]:
        (state) => {
          state.loading = true
          state.interactions = []
        },
    [getAllInteractionsThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.interactions = payload
        },
    [getAllInteractionsThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [findInteractionsByUserIdThunk.pending]:
        (state) => {
          state.loading = true
          state.interactions = []
        },
    [findInteractionsByUserIdThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.interactions = payload
        },
    [findInteractionsByUserIdThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [findInteractionsByPlaceIdThunk.pending]:
        (state) => {
          state.loading = true
          state.interactions = []
        },
    [findInteractionsByPlaceIdThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.interactions = payload
        },
    [findInteractionsByPlaceIdThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [findSpecificInteractionThunk.pending]:
        (state) => {
          state.loading = true
          state.interactions = []
        },
    [findSpecificInteractionThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.interactions = payload
        },
    [findSpecificInteractionThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [createInteractionThunk.pending]:
        (state) => {
          state.loading = true
        },
    [createInteractionThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.interactions.push(payload)
        },
    [createInteractionThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [deleteInteractionThunk.pending]:
        (state) => {
          state.loading = true
        },
    [deleteInteractionThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.interactions = state.interactions
          .filter(t => t._id !== payload)
        },
    [deleteInteractionThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
  }
});

export default interactionsReducer.reducer;