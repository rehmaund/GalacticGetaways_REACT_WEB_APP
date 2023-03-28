import axios from 'axios';

const API_KEY = '5ae2e3f221c38a28845f05b61fbd1334eba2a96d5c512d14f5665d87';
const BASE_API = 'https://api.opentripmap.com/0.1/en/places/';

export const getPlaces = async (place) => {
  return await axios
  .get(BASE_API + "geoname?name=" + place + '&apikey=' + API_KEY)
  .then(response => {
    const location = response.data;
    return axios.get(BASE_API + "radius?radius=100&lon=" + location.lon
        + "&lat=" + location.lat + "&limit=100&apikey=" + API_KEY);
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
  }).catch(error => console.log(error));
}

// const setLocationResults = (data) => {
//   apiGet("radius", `radius=100&lon=${data.lon}&lat=${data.lat}&limit=100`).then(setPlaces);
// }
//
// const setPlaces = (data) => {
//   for (let i = 0; i < data.features.length; i++) {
//     const place = data.features[i];
//     apiGet("xid/" + place.properties.xid).then(setPlaceDetails);
//   }
// }
//
// let places = [];
//
// const setPlaceDetails = (data) => {
//   if (!places.includes(data) && data.image !== undefined) {
//     places.push(data);
//   }
//   // setPlaceItems(places.map(place => <ItemPreview item={place} key={place.xid}/>));
//   console.log(places)
// }
//
// apiGet("geoname", "name=" + query).then(setLocationResults);
// const [placeItems, setPlaceItems] = useState(null);