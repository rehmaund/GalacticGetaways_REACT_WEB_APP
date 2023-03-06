import {Link} from "react-router-dom";

function Nav() {
  return (
      <span className="d-flex justify-content-between">
        <Link to="/" className="w-25">Home</Link>
        <Link to="/search" className="w-50">Search</Link>
        <Link to="/login" className="w-25">Log In</Link>
      </span>
  )
}

export default Nav;