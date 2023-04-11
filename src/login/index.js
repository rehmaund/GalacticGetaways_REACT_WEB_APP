import {useState} from "react";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [username, enterUsername] = useState('');
    const [password, enterPassword] = useState('');
    const handleLogin = /*async*/ () => {
        try {
            //await dispatch(userLoginThunk({ username, password }));
            navigate("/profile");
        } catch (e) {
            alert(e);
        }
    };

    return (

        <div className="card text-white bg-secondary mb-3">
            <div className="card-header row">
                <div className="col">
                <h4>Welcome to *WEBSITE NAME*</h4></div>
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
                        <label htmlFor="exampleInputEmail1" className="form-label mt-2">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp" placeholder="Enter email" onChange={(event) => enterUsername(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="form-label mt-2">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={(event) => enterPassword(event.target.value)}
                               placeholder="Password"/>
                    </div>
                <button className="btn btn-info btn-lg mt-2">Login</button>
                </div>
                <div className="col-1"></div>
                <div className="col-4">
                <h4 className="card-title">No Account? Register Today!</h4>
                    <button className="btn btn-info btn-lg mt-2" onClick={() => {
                        handleLogin();
                        navigate(`/register`);
                    }}>Register</button>
                </div>
            </div>
        </div>

    );
}

export default Login;