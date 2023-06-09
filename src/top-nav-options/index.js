import {useState} from "react";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function TopNavBar() {
    let [input, setInput] = useState('');
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.user);


    const goToSearch = () => {
        navigate(`/search/${input}`);
    }
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-primary w-100 mb-4 ps-3 pe-3 p-sm-0">
            <div className="container-fluid m-4">
                <a className="navbar-brand" href="#">Galactic Getaways</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="navbar-item mx-2 nav-link active" to="/"><i className="fa-solid fa-house fa-2x"/>
                            </Link>

                        </li>
                        <li className="nav-item">
                            <Link to={`${user ? '/logout' : '/login'}`} className="navbar-item mx-2 nav-link active"><i className={`${user ? 'fa-solid fa-right-from-bracket fa-2x' : 'fa-solid fa-right-to-bracket fa-2x'}`}/>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`${user ? '/profile' : '/'}`} className="navbar-item mx-2 nav-link active"><i className={`${user ? 'fa-solid fa-user fa-2x' : ''}`}/>
                            </Link>
                        </li>
                        { user && user.type === "MODERATOR" &&
                            <li className="nav-item">
                            <Link to='/review' className="navbar-item mx-2 nav-link active"><i className="fa-solid fa-flag fa-2x"/>
                            </Link>
                            </li>
                        }
                    </ul>
                    <form className="d-flex w-50">
                        <input className="form-control me-sm-3" type="search" placeholder="Search for an Earthling City"
                               onChange={(event) => setInput(event.target.value)}/>
                        <button className="btn btn-secondary my-2 my-sm-0 me-4" type="submit" onClick={goToSearch}>Search</button>
                    </form>
                </div>
            </div>
        </nav>

    );
}

export default TopNavBar;