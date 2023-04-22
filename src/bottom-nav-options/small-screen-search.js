import {useState} from "react";
import {useLocation, useNavigate} from "react-router";
import {useSelector} from "react-redux";

function SmallScreenSearch() {
    const location = useLocation();
    const currentPage = location.pathname;
    let [input, setInput] = useState('');
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.user);


    const goToSearch = () => {
        navigate(`/search/${input}`);
    }
    return(
        <div>
        {currentPage === "/" &&
        <nav className="navbar navbar-expand-md navbar-dark w-100 mb-4 ps-3 pe-3 p-sm-0">
            <div className="container-fluid m-4">
                <form className="d-flex w-100">
                    <input className="form-control me-3" type="search" placeholder="Search for an Earthling City"
                           onChange={(event) => setInput(event.target.value)}/>
                    <button className="btn btn-secondary my-sm-0 me-4" type="submit" onClick={goToSearch}>Search
                    </button>
                </form>
            </div>
        </nav>
        }
        </div>
    );
}

export default SmallScreenSearch;