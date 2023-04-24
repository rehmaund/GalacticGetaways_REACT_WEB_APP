
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import { logoutThunk } from "../users/users-thunks.js";

function Logout() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = async () => {
        try {
            await dispatch(logoutThunk());
            navigate("/");
        } catch (e) {
            alert(e);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
        <div className="card text-white bg-secondary mb-3 width-70pc mt-3">
            <div className="card-header row">
                <div className="col">
                    <h4>Travel Again Soon!</h4></div>
                <div className="col">
                    <button type="button" className="btn-close float-end" data-bs-dismiss="modal" aria-label="Close" onClick={() => {
                        navigate(`/`);
                    }}>
                        <span aria-hidden="true"></span>
                    </button>
                </div>
            </div>

            <div className="card-body row">
                <div className="col-6">

                    <button className="btn btn-info btn-lg mt-2" onClick={handleLogout}>Logout</button>
                </div>

        </div>
        </div>
        </div>

    )
}

export default Logout;