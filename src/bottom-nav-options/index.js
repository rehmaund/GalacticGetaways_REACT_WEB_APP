
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function BottomNavBar() {
    const { user } = useSelector((state) => state.user);
    return(
        <nav className="navbar fixed-bottom navbar-dark bg-primary w-100">
            <div className="container-fluid m-1 d-flex justify-content-center">
                <ul className="navbar-nav flex-row justify-content-between w-75">
                    <li className="nav-item">
                        <Link to="/" className="navbar-item mx-2 nav-link active"><i className="fa-solid fa-house fa-2x"/></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" className="navbar-item mx-2 nav-link active"><i className={`${user ? 'fa-solid fa-user fa-2x' : 'fa-solid fa-right-to-bracket fa-2x'}`}/></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/search/" className="navbar-item mx-2 nav-link active"><i className="fa-solid fa-magnifying-glass fa-2x"/></Link>
                    </li>
                    { user &&
                        <li className="nav-item">
                        <Link to="/logout" className="navbar-item mx-2 nav-link active"><i className="fa-solid fa-right-from-bracket fa-2x"/></Link>
                        </li>
                    }
                    { user && user.type === "MODERATOR" &&
                        <li className="nav-item">
                        <Link to="/review" className="navbar-item mx-2 nav-link active"><i className="fa-solid fa-flag fa-2x"/></Link>
                    </li>}
                </ul>
            </div>
        </nav>

    );
}

export default BottomNavBar;