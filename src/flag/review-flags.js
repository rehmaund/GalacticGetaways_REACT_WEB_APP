import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllFlagsThunk} from "./flags-thunks";
import Flagged from "./flagged";


const ReviewFlagged = () => {
  const dispatch = useDispatch();
  const {flags, loading} = useSelector(state => state.flags);
  useEffect(() => {
    dispatch(getAllFlagsThunk())
  }, [dispatch])
  return (
      <div>
        <h1>Review Flagged Content</h1>
        <div className="row col-12 w-100 p-0 m-0">
          {loading && <div>Loading...</div>}
          {flags.length === 0 && <div>No flags to review</div>}
          {flags.length > 0 && flags.map(flagged => <Flagged flag={flagged} key={flagged._id}/>)}
        </div>
      </div>
  );
}

export default ReviewFlagged;