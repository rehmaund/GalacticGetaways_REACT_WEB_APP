import {
    decrementLikeThunk, decrementRecommendationThunk, findAllCountersThunk,
    findCountersByPlaceIdThunk, incrementLikeThunk, incrementRecommendationThunk,
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
      [findAllCountersThunk.pending]:
          (state) => {
              state.loading = true
              state.counters = []
          },
      [findAllCountersThunk.fulfilled]:
          (state, { payload }) => {
              state.loading = false
              state.counters = payload
          },
      [findAllCountersThunk.rejected]:
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
          state.counters = payload
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
          state.counters = payload
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
          state.counters = payload
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
          state.counters = payload
        },
  }
});

export default countersReducer.reducer;