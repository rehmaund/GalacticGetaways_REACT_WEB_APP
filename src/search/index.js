import {useParams} from "react-router";
import React, {useEffect, useLayoutEffect, useState} from "react";
import {
  getPlaceDetailsForListThunk,
  getPlaceDetailsThunk,
  getPlacesThunk
} from "./search-thunks.js";
import {useDispatch, useSelector} from "react-redux";
import ItemPreview from "../item-preview/item-preview";
import ItemColumn from "../item-preview/item-column";


const Search = () => {
  const place = useParams().place;
  const {placesList, xidList, places, loading} = useSelector(state => state.search);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlacesThunk(place))
  }, [])
  useEffect(() => {
    if (placesList === undefined) return;
      const placesListLimited = placesList.slice(0, 8);
      placesListLimited.forEach(place => {
      if (xidList.includes(place.properties.xid)) return;
      dispatch(getPlaceDetailsForListThunk(place.properties.xid))
    })
  }, [dispatch, placesList, xidList])


    return (
      <div>
        <h1>Search</h1>
        <h4>Place: {place}</h4>
        <div className="row col-12 w-100 p-0 m-0">
          {loading && <div>Loading...</div>}
          {places.map(place => <ItemColumn columnContent={[place]} key={place.xid}/>)}
        </div>
      </div>
  );
}

export default Search;