import {useParams} from "react-router";
import ItemPreview from "../home/ItemPreview";
import React from "react";
import {useState} from "react";

const API_KEY = '5ae2e3f221c38a28845f05b61fbd1334eba2a96d5c512d14f5665d87';

const Search = () => {
  const query = useParams().query;

  async function apiGet(method, query) {
    return await new Promise(function(resolve, reject) {
      let otmAPI =
          "https://api.opentripmap.com/0.1/en/places/" +
          method +
          "?";
      if (query !== undefined) {
        otmAPI += "&" + query;
      }
      otmAPI += "&apikey=" + API_KEY;
      fetch(otmAPI)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(function(err) {
        console.log("Fetch Error :-S", err);
      });
    });
  }

  const setLocationResults = (data) => {
    apiGet("radius", `radius=100&lon=${data.lon}&lat=${data.lat}&limit=100`).then(setPlaces);
  }

  const setPlaces = (data) => {
    for (let i = 0; i < data.features.length; i++) {
      const place = data.features[i];
      apiGet("xid/" + place.properties.xid).then(setPlaceDetails);
    }
  }

  let places = [];

  const setPlaceDetails = (data) => {
    if (!places.includes(data) && data.image !== undefined) {
      places.push(data);
    }
    // setPlaceItems(places.map(place => <ItemPreview item={place} key={place.xid}/>));
    console.log(places)
  }

  apiGet("geoname", "name=" + query).then(setLocationResults);
  const [placeItems, setPlaceItems] = useState(null);
    return (
      <div>
        <h1>Search</h1>
        <h4>Query: {query}</h4>
        <div className="row col-12 w-100 p-0 m-0">
          {placeItems}
        </div>
      </div>
  );
}

export default Search;