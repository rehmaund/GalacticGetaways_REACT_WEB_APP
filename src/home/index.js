
import HomeSidebar from "./home-sidebar";
import quotes from "./quotes";
import ItemColumns from "../item-preview/item-columns";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getPlaceDetailsForListThunk, getPlacesThunk} from "../search/search-thunks";
import {findAllCountersThunk} from "../detail/counters-thunks";


function Home() {

    let [likedPlacesList, setLikedPlacesList] = useState([]);
    const [placeDetails, setPlaceDetails] = useState([]);
    const [placeDetailsRec, setPlaceDetailsRec] = useState([]);
    let [xidListLikes, setXidListLikes] = useState([]);
    let [xidListRecs, setXidListRecs] = useState([]);
    const {placesList, places, loading} = useSelector(state => state.search);
    const dispatch = useDispatch();

    useEffect( () => {
        console.log("entered use effect");

        const populateXidList = async () => {
            // Find all liked or recommended records
            const records = await dispatch(findAllCountersThunk());
            console.log("records returned from thunk:");
            console.log(records);
            setLikedPlacesList(records.payload);
        }

        populateXidList();
    }, []);

    useEffect(() => {
        console.log('Liked places list updated:', likedPlacesList);
        if (likedPlacesList.length > 0) {
            // Extract xid from each record into list of xids
            let tempArrayLikes = [];
            let tempArrayRecs = [];
            for (let location of likedPlacesList) {
                    tempArrayLikes.push({xid: location.xid, popularity:location.num_likes});
                    tempArrayRecs.push({xid: location.xid, popularity:location.num_recommendations});

            }

            // Sort to find most popular
            tempArrayLikes.sort((a, b) => b.popularity - a.popularity);
            tempArrayRecs.sort((a, b) => b.popularity - a.popularity);

            let numRecords = tempArrayLikes.length;
            if(4 < numRecords) {
                numRecords = 4;
            }

            let xidArrayLikes = [];
            let xidArrayRecs = [];

            for (let i = 1; i <= numRecords; i++) {
                xidArrayLikes.push(tempArrayLikes[i].xid);
                xidArrayRecs.push(tempArrayRecs[i].xid);

            }
            console.log(xidArrayLikes);

            setXidListLikes(xidArrayLikes);
            setXidListRecs(xidArrayRecs);
        }
    }, [likedPlacesList]);

    useEffect( () => {

        const fetchPlaceDetailsLikes = async () => {
            if (!xidListLikes || xidListLikes.length === 0) return;

            const promisesLikes = xidListLikes.map(xid => dispatch(getPlaceDetailsForListThunk(xid)));

            const resultsLikes = await Promise.all(promisesLikes);

            const placeDetails = resultsLikes.map(result => result.payload);


            setPlaceDetails(placeDetails);

        }

        fetchPlaceDetailsLikes();

    }, [dispatch, placesList, xidListLikes]);


    useEffect( () => {
        const fetchPlaceDetailsRecs = async () => {
            if (!xidListRecs || xidListRecs.length === 0) return;
            const promisesRecs = xidListRecs.map(xid => dispatch(getPlaceDetailsForListThunk(xid)));

            const resultsRecs = await Promise.all(promisesRecs);

            const placeDetailsRecs = resultsRecs.map(result => result.payload);

            setPlaceDetailsRec(placeDetailsRecs);

        }

            setTimeout(fetchPlaceDetailsRecs(), 4);

    }, [dispatch, placesList, xidListRecs]);

  return (
      <div className="container row">
          <div className="w-25 d-none d-lg-block float-start">
              <HomeSidebar quotes={quotes}/>
          </div>
          <div className="col">
              <div>
                  <h1>Highly Recommended Sites</h1>
                  <ItemColumns allContent={placeDetailsRec}/>
              </div>
              <div>
                  <h1>Most Liked By Aliens</h1>
                  <ItemColumns allContent={placeDetails}/>
              </div>
          </div>
      </div>
  );
}

export default Home