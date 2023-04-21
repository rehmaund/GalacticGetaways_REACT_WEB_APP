import axios from 'axios';

const API_KEY = '5ae2e3f221c38a28845f05b61fbd1334eba2a96d5c512d14f5665d87';
const BASE_API = 'https://api.opentripmap.com/0.1/en/places/';

export const getPlaces = async (place) => {
  return await axios
  .get(BASE_API + "geoname?name=" + place + '&apikey=' + API_KEY)
  .then(response => {
    const location = response.data;
    return axios.get(BASE_API + "radius?radius=100&lon=" + location.lon
        + "&lat=" + location.lat + "&limit=15&apikey=" + API_KEY);
  })
  .then(response => {
    return response.data.features;
  }).catch(error => console.log(error));
}

export const getPlaceDetails = async (xid) => {
  return await axios.get(BASE_API + "xid/" + xid + "?apikey=" + API_KEY)
  .then(response => {
    const place = response.data;
    return place.preview ? place : null
  }).catch(error => {
    return error.response.status !== 429 ? console.log(error) : null;
  });
}
