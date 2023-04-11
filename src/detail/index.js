import {useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {getPlaceDetailsThunk} from "../search/search-thunks.js";
import {useDispatch, useSelector} from "react-redux";

const Detail = () => {
  const xid = useParams().xid;
  const dispatch = useDispatch();
  const {place, loading} = useSelector(state => state.search);
  useEffect(() => {
    dispatch(getPlaceDetailsThunk(xid))
  }, [dispatch, xid])
  return (
      <div className="row col-12 w-100 p-0 m-0">
        {loading && <div>Loading...</div>}
        {place &&
          <div>
            <h1>{place.name}</h1>
            {place.address &&
              <div>
                <h4>{place.address.city}, {place.address.country}</h4>
              </div>}
            {place.preview && <img src={place.preview.source}/>}
          </div>}
      </div>
  );
  }

export default Detail;