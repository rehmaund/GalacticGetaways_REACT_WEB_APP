import {useNavigate} from "react-router";
function Register() {
    const navigate = useNavigate();

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
                           placeholder="Enter email"/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPhone" className="form-label mt-4">Phone Number</label>
                    <input type="phone" className="form-control" id="exampleInputPhone" placeholder="XXX-XXX-XXXX"/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputUsername" className="form-label mt-4">Username</label>
                    <input type="username" className="form-control" id="exampleInputUsername" placeholder="Username"/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>

                <div className="form-group">
                    <label htmlFor="displayName" className="form-label mt-4">Display Name</label>
                    <input type="text" className="form-control" id="displayName" placeholder="Display Name"/>
                </div>

                <div className="form-group">
                    <label htmlFor="location" className="form-label mt-4">Location</label>
                    <input type="text" className="form-control" id="location" placeholder="Location"/>
                </div>

                <fieldset className="form-group">
                    <legend className="mt-4">Select User Type:</legend>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1"
                               value="option1"/>
                        <label className="form-check-label" htmlFor="optionsRadios1">
                            Alien
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2"
                               value="option2"/>
                        <label className="form-check-label" htmlFor="optionsRadios2">
                            Human
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios3"
                               value="option3"/>
                        <label className="form-check-label" htmlFor="optionsRadios3">
                            Moderator
                        </label>
                    </div>

                </fieldset>

                <button type="submit" className="btn btn-primary mt-2 mb-4">Submit</button>
            </fieldset>
        </form>
    );
}

export default Register;