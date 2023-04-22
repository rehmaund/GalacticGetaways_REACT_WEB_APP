import {createSlice} from "@reduxjs/toolkit";
import {
  createFlagThunk,
  deleteFlagThunk,
  getAllFlagsThunk
} from "./flags-thunks";

const initialState = {
  loading: false,
  flags: [],
}

export const flagsReducer = createSlice({
  name: 'flags',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllFlagsThunk.pending]:
        (state) => {
          state.loading = true
          state.flags = []
        },
    [getAllFlagsThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.flags = payload
        },
    [getAllFlagsThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [createFlagThunk.pending]:
        (state) => {
          state.loading = true
        },
    [createFlagThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [createFlagThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.flags = payload
        },
    [deleteFlagThunk.pending]:
        (state) => {
          state.loading = true
        },
    [deleteFlagThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [deleteFlagThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.flags = payload
        }
  }
})

export default flagsReducer.reducer