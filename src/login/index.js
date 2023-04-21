
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import React, { useState } from "react";
import { loginThunk } from "../users/users-thunks.js";

function Login() {

        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const navigate = useNavigate();
        const dispatch = useDispatch();
        const handleLogin = async () => {
            try {
                await dispatch(loginThunk({ username, password }));
                navigate("/profile");
            } catch (e) {
                alert(e);
            }
        };


        return (

        <div className="card text-white bg-secondary mb-3">
            <div className="card-header row">
                <div className="col">
                <h4>Welcome, Beings from Earth and Beyond!</h4></div>
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
                <h4 className="card-title">Login:</h4>
                    <div className="form-group">
                        <label htmlFor="InputUsername" className="form-label mt-2">Username</label>
                        <input type="text" className="form-control" id="InputUsername"
                               placeholder="Enter username" onChange={(event) => setUsername(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="form-label mt-2">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={(event) => setPassword(event.target.value)}
                               placeholder="Password"/>
                    </div>
                <button className="btn btn-info btn-lg mt-2" onClick={handleLogin}>Login</button>
                </div>
                <div className="col-1"></div>
                <div className="col-4">
                <h4 className="card-title">No Account? Register Today!</h4>
                    <button className="btn btn-info btn-lg mt-2" onClick={() => {
                        navigate(`/register`);
                    }}>Register</button>
                </div>
            </div>
        </div>

    );
}

export default Login;