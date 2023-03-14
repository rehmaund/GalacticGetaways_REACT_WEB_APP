import {Link} from "react-router-dom";
import HomeButton from "./top-nav-options/home-button";
import LoginButton from "./top-nav-options/login-button";
import SearchBar from "./top-nav-options/search-bar";
import TopNavBar from "./top-nav-options";

function Nav() {
  return (
      <span className="d-flex justify-content-between">
        <TopNavBar/>
      </span>
  )
}

export default Nav;