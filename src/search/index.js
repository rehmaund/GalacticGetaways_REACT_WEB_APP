import {useParams} from "react-router";




async function fetchSearchResults(query) {
  const API_KEY = '5ae2e3f221c38a28845f05b61fbd1334eba2a96d5c512d14f5665d87';
  const response = await fetch(`https://api.opentripmap.com/0.1/en/places/geoname?name=${query}&apikey=${API_KEY}`);
  const data = await response.json();
  return data;
}

const Search = () => {
  const query = useParams().query;
  // const data = fetchSearchResults(query).then(data => {return data});
    return (
      <div>
        <h1>Search</h1>
        <h4>Query: {query}</h4>
      </div>
  );
}

export default Search;