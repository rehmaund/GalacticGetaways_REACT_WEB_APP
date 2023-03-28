import {useParams} from "react-router";
import ItemPreview from "../home/ItemPreview";
import React, {useEffect, useState} from "react";
import {getPlaceDetailsThunk, getPlacesThunk} from "./search-thunks.js";
import {useDispatch, useSelector} from "react-redux";



const Search = () => {
  const place = useParams().place;
  const {placesList, xidList, places, loading} = useSelector(state => state.search);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlacesThunk(place))
  }, [dispatch, place])
  useEffect(() => {
    placesList.forEach(place => {
      if (xidList.includes(place.properties.xid)) return;
      dispatch(getPlaceDetailsThunk(place.properties.xid))
    })
  }, [dispatch, placesList])
    return (
      <div>
        <h1>Search</h1>
        <h4>Place: {place}</h4>
        <div className="row col-12 w-100 p-0 m-0">
          {loading && <div>Loading...</div>}
          {places.map(place => <ItemPreview item={place} key={place.xid}/>)}
        </div>
      </div>
  );
}

export default Search;