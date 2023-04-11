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
                    <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>

                <div className="form-group">
                    <label htmlFor="firstName" className="form-label mt-4">First Name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="Name"/>
                </div>

                <div className="form-group">
                    <label htmlFor="lastName" className="form-label mt-4">Last Name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Name"/>
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