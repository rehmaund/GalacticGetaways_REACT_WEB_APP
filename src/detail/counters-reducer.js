import {
  createCounterThunk, decrementLikeThunk, decrementRecommendationThunk,
  findCountersByPlaceIdThunk, incrementLikeThunk, incrementRecommendationThunk,
  updateCounterThunk
} from "./counters-thunks";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  counters: [],
}

export const countersReducer = createSlice({
  name: 'counters',
  initialState,
  reducers: {},
  extraReducers: {
    [findCountersByPlaceIdThunk.pending]:
        (state) => {
          state.loading = true
          state.counters = []
        },
    [findCountersByPlaceIdThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.counters = payload
        },
    [findCountersByPlaceIdThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [incrementLikeThunk.pending]:
        (state) => {
          state.loading = true
        },
    [incrementLikeThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [incrementLikeThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.counters = state.counters
          .map(c => c._id === payload._id ? payload : c)
        },
    [decrementLikeThunk.pending]:
        (state) => {
          state.loading = true
        },
    [decrementLikeThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [decrementLikeThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.counters = state.counters
          .map(c => c._id === payload._id ? payload : c)
        },
    [incrementRecommendationThunk.pending]:
        (state) => {
          state.loading = true
        },
    [incrementRecommendationThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [incrementRecommendationThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.counters = state.counters
          .map(c => c._id === payload._id ? payload : c)
        },
    [decrementRecommendationThunk.pending]:
        (state) => {
          state.loading = true
        },
    [decrementRecommendationThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [decrementRecommendationThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.counters = state.counters
          .map(c => c._id === payload._id ? payload : c)
        },
  }
});

export default countersReducer.reducer;