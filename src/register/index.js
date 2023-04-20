import {useNavigate} from "react-router";
import {useState} from "react";
import {registerThunk} from "../users/users-thunks.js";
import {useDispatch} from "react-redux";
function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [password, setPassword] = useState("");
    const [location, setLocation] = useState("");
    const [userType, setUserType] = useState("");
    const dispatch = useDispatch();
    const handleRegister = async () => {
        const newUser = {"username": username,
            "display_name": displayName,
            "email": email,
            "phone": phone,
            "type": userType,
            "bio": "",
            "wants_visit": "",
            "password": password,
            "location": location
                }
        try {
            await dispatch(registerThunk(newUser));
            navigate("/profile");
        } catch (e) {
            alert(e);
        }
    };
    const handleType = (event) => {
        setUserType(event.target.value);
    }

    return(
        <form className="w-75">
            <fieldset>
                <legend>
                    <div className="col text-center">
                    Register for an Account:</div>
                    <div className="col">
                        <button type="button" className="float-end btn btn-danger btn-md" onClick={() => {
                            navigate(`/`);
                        }}>EXIT
                        </button>
                    </div>
                </legend>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email" onChange={(event) => setEmail(event.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPhone" className="form-label mt-4">Phone Number</label>
                    <input type="phone" className="form-control" id="exampleInputPhone" placeholder="XXX-XXX-XXXX" onChange={(event) => setPhone(event.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputUsername" className="form-label mt-4">Username</label>
                    <input type="username" className="form-control" id="exampleInputUsername" placeholder="Username" onChange={(event) => setUsername(event.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="displayName" className="form-label mt-4">Display Name</label>
                    <input type="text" className="form-control" id="displayName" placeholder="Display Name" onChange={(event) => setDisplayName(event.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="location" className="form-label mt-4">Location</label>
                    <input type="text" className="form-control" id="location" placeholder="Location" onChange={(event) => setLocation(event.target.value)}/>
                </div>

                <fieldset className="form-group">
                    <legend className="mt-4">Select User Type:</legend>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="optionsRadios" id="ALIEN"
                               value="ALIEN" onChange={handleType}/>
                        <label className="form-check-label" htmlFor="optionsRadios1">
                            Alien
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="optionsRadios" id="HUMAN"
                               value="HUMAN" onChange={handleType} />
                        <label className="form-check-label" htmlFor="optionsRadios2">
                            Human
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="optionsRadios" id="MODERATOR"
                               value="MODERATOR" onChange={handleType}/>
                        <label className="form-check-label" htmlFor="optionsRadios3">
                            Moderator
                        </label>
                    </div>

                </fieldset>

                <button type="submit" className="btn btn-primary mt-2 mb-4" onClick={handleRegister}>Submit</button>
            </fieldset>
        </form>
    );
}

export default Register;