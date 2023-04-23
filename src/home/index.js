
import HomeSidebar from "./home-sidebar";
import quotes from "./quotes";
import ItemColumns from "../item-preview/item-columns";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getPlaceDetailsForListThunk, getPlacesThunk} from "../search/search-thunks";
import {findAllCountersThunk} from "../detail/counters-thunks";



function Home() {
    const { user } = useSelector((state) => state.user);
    const { counters } = useSelector((state) => state.counters);
    let [likedPlacesList, setLikedPlacesList] = useState([]);
    const [placeDetails, setPlaceDetails] = useState([]);
    let [xidList, setXidList] = useState([]);
    const {placesList, places, loading} = useSelector(state => state.search);
    const dispatch = useDispatch();

    useEffect( () => {
        console.log("entered use effect");

        const populateXidList = async () => {
            // Find all liked or recommended records
            const records = await dispatch(findAllCountersThunk());
            setLikedPlacesList(records.payload);
            console.log("getting places");
            console.log(likedPlacesList);

            // Extract xid from each record into list of xids
            let xidArray = [];
            for (let location in likedPlacesList) {
                xidArray.push(location.properties.xid);
            }

            setXidList(xidArray);
        }

        populateXidList();
    }, []);

    useEffect( () => {

        const fetchPlaceDetails = async () => {
            if (xidList.length === 0) return;

            const promises = xidList.map(xid => dispatch(getPlaceDetailsForListThunk(xid)));

            const results = await Promise.all(promises);
            console.log("results:");
            console.log(results);

            const placeDetails = results.map(result => result.payload);

            setPlaceDetails(placeDetails);
            console.log("placedetails:");
            console.log(placeDetails);
        }

        fetchPlaceDetails();

    }, [dispatch, placesList, xidList])

  return (
      <div className="container">
      <div className="row w-100 pb-5">
        <div className="d-none d-lg-block w-25 float-start">
          <HomeSidebar quotes={quotes}/>
        </div>
          <div>


        {<ItemColumns allContent={placeDetails}/>}
          </div>
      </div>
      </div>
  );
}

export default Home