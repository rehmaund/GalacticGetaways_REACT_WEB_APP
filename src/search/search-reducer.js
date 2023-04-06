import {createSlice} from "@reduxjs/toolkit";
import {getPlaceDetailsThunk, getPlacesThunk} from "./search-thunks";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

const initialState = {
  placesList: [],
  xidList: [],
  places: [],
  loading: false,
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  extraReducers: {
    [getPlacesThunk.pending]:
        (state) => {
          state.loading = true
          state.places = []
        },
    [getPlacesThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.placesList = payload
        },
    [getPlacesThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [getPlaceDetailsThunk.pending]:
        (state) => {
          state.loading = true
        },
    [getPlaceDetailsThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          if (payload != null && !state.places.includes(payload) && !state.xidList.includes(payload.xid)) {
            state.xidList.push(payload.xid)
            state.places.push(payload)
          }
        },
    [getPlaceDetailsThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        }
  },
  reducers: { }
});

export default searchSlice.reducer;