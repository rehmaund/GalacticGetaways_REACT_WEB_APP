import {useState} from "react";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

function TopNavBar(loggedIn) {
    let [input, setInput] = useState('');
    const navigate = useNavigate();
    const goToSearch = () => {
        navigate(`/search/${input}`);
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary w-100 mb-4 ps-3 pe-3 p-sm-0">
            <div className="container container-fluid">
                <a className="navbar-brand" href="#">Website Title</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item mx-2">
                            <Link className="nav-link active" to="/"><i className="fa-solid fa-house fa-2x"/>
                                <span className="visually-hidden">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link active" href="#"><i className={`${loggedIn === 'n' ? 'fa-solid fa-right-to-bracket fa-2x' : 'fa-solid fa-user fa-2x'}`}/>
                                <span className="visually-hidden">(current)</span>
                            </a>
                        </li>

                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-sm-2" type="search" placeholder="Search"
                               onChange={(event) => setInput(event.target.value)}/>
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit" onClick={goToSearch}>Search</button>
                    </form>
                </div>
            </div>
        </nav>

    );
}

export default TopNavBar;