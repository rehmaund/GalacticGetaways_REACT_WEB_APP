import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllFlagsThunk} from "./flags-thunks";
import Flagged from "./flagged";
import {Link} from "react-router-dom";


const ReviewFlagged = () => {

    const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {flags, loading} = useSelector(state => state.flags);
  useEffect(() => {
    dispatch(getAllFlagsThunk())
  }, [dispatch])
  return (
      <div className="mt-3 mb-4">
      { (!user || user.type != "MODERATOR" ) &&
          <div className="card border-danger m-4 align-content-center w-75">
              <div className="card-header">Warning</div>
              <div className="card-body">
                  <p className="card-text">Access Denied. Must have appropriate credentials to view.</p>
                    <Link to='/'><button type="button" className="btn btn-outline-warning">Return To Home Page</button></Link>
              </div>
          </div>
      }

          {user && user.type === "MODERATOR" &&
      <div>
        <h1>Review Flagged Content</h1>
        <div className="row col-12 w-100 p-0 m-0">
          {loading && <div>Loading...</div>}
          {flags.length === 0 && <div>No flags to review</div>}
          {flags.length > 0 && flags.map(flagged => <Flagged flag={flagged} key={flagged._id}/>)}
        </div>
      </div>
          }
      </div>
  );
}

export default ReviewFlagged;