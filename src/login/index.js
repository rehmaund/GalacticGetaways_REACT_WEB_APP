import {useState} from "react";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
function Login() {
    const navigate = useNavigate();

    return (
        <div className="modal bg-primary">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Login</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {
                            navigate(`/`);
                        }}>
                            <span aria-hidden="true"></span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                   placeholder="Password"/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {
                            navigate(`/register`);
                        }}>No Account? Register</button>
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;