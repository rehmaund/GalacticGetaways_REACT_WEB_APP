
import HomeSidebar from "./home-sidebar";
import quotes from "./quotes";
import ItemColumns from "../item-preview/item-columns";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getPlaceDetailsForListThunk, getPlacesThunk} from "../search/search-thunks";
import {findAllCountersThunk} from "../detail/counters-thunks";
import {findCommentsByUsernameThunk, getAllCommentsThunk} from "../detail/comments/comments-thunks";


function Home() {
    const { user } = useSelector((state) => state.user);
    let [likedPlacesList, setLikedPlacesList] = useState([]);
    let [commentsList, setCommentsList] = useState([]);
    const [placeDetails, setPlaceDetails] = useState([]);
    const [placeDetailsRec, setPlaceDetailsRec] = useState([]);
    const [commentedPlaceDetails, setCommentedPlaceDetails] = useState([]);
    let [xidListLikes, setXidListLikes] = useState([]);
    let [xidListRecs, setXidListRecs] = useState([]);
    let [xidListComments, setXidListComments] = useState([]);
    const {placesList, places, loading} = useSelector(state => state.search);
    const dispatch = useDispatch();

    useEffect( () => {

        const populateXidList = async () => {
            // Find all liked or recommended records
            const records = await dispatch(findAllCountersThunk());
            setLikedPlacesList(records.payload);
        }

        populateXidList();
    }, []);

    useEffect( () => {

        const getComments = async () => {
            // Find all liked or recommended records
            if(user){
                const records = await dispatch(findCommentsByUsernameThunk(user.username));
                setCommentsList(records.payload);
            }

        }

        getComments();
    }, [dispatch, user]);

    useEffect(() => {

        if (commentsList.length > 0) {
            console.log("comments List:");
            console.log(commentsList);
            // Extract xid from each record into list of xids where user id is the current user

            let tempArrayComments = [];
            for (let comment of commentsList) {
                    if(!tempArrayComments.includes(comment.xid))
                {
                    tempArrayComments.push(comment.xid);
                }
            }

            console.log("tempArraycomments", tempArrayComments);

            let numRecords = tempArrayComments.length;
            if(numRecords < 5) {
                numRecords = 0;
            } else {
                numRecords = numRecords - 5;
            }

            let xidArrayComments = [];

            for (let i = tempArrayComments.length - 1; i >= numRecords; i--) {
                xidArrayComments.push(tempArrayComments[i]);
            }

            console.log("xidArrayComments");
            console.log(xidArrayComments);

            setXidListComments(xidArrayComments);
        }
    }, [commentsList]);

    useEffect( () => {

        const fetchPlaceDetailsComments = async () => {
            if (!xidListComments || xidListComments.length === 0) return;

            const promisesComments = xidListComments.map(xid => dispatch(getPlaceDetailsForListThunk(xid)));

            const resultsComments = await Promise.all(promisesComments);

            const placeDetailsComments = resultsComments.map(result => result.payload);


            setCommentedPlaceDetails(placeDetailsComments);

        }

        fetchPlaceDetailsComments();

    }, [dispatch, placesList, xidListComments]);

    useEffect(() => {
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
            if(5 < numRecords) {
                numRecords = 5;
            }

            let xidArrayLikes = [];
            let xidArrayRecs = [];

            for (let i = 1; i <= numRecords; i++) {
                xidArrayLikes.push(tempArrayLikes[i].xid);
                xidArrayRecs.push(tempArrayRecs[i].xid);

            }

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
            if (!xidListRecs || xidListRecs.length === 0 || user) return;
            const promisesRecs = xidListRecs.map(xid => dispatch(getPlaceDetailsForListThunk(xid)));

            const resultsRecs = await Promise.all(promisesRecs);

            const placeDetailsRecs = resultsRecs.map(result => result.payload);

            setPlaceDetailsRec(placeDetailsRecs);

        }

        setTimeout(() => {
            fetchPlaceDetailsRecs();
        }, 4);

    }, [dispatch, placesList, xidListRecs]);

  return (
      <div className="container">
          <div className="row w-100 pb-5">
          <div className="col-lg-3 d-none d-lg-block float-start">
              <HomeSidebar quotes={quotes}/>
          </div>
              <div className="col-lg-9">
              {!user &&
                  <div className="row">
                  <h1 className="mb-4">Highly Recommended Sites</h1>
                  <div className="row">
                  <ItemColumns allContent={placeDetailsRec}/>
                  </div></div>}

              {user &&
                  <div className="row">
                  <h1 className="mb-4">Your Recently Commented on Sites</h1>
                  <ItemColumns allContent={commentedPlaceDetails}/></div>}

                  <div className="row">
                  <h1 className="mb-4">Most Liked By Aliens</h1>
                  <ItemColumns allContent={placeDetails}/>
                  </div>

              </div>
          </div>
      </div>
  );
}

export default Home;