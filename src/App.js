
// import Profile from "./profile";
import Home from "./home";
// import Search from "./search";
// import Login from "./login";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Nav from "./nav";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Nav loggedIn='n'/>
          <Routes>
            <Route index
                   element={<Home/>}/>
            {/*<Route path="/search"*/}
            {/*       element={<Search/>}/>*/}
            {/*<Route path="/login"*/}
            {/*       element={<Login/>}/>*/}
          </Routes>
        </div>
      </BrowserRouter>
  );
}
export default App;