import Home from "./home";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import TopNavBar from "./top-nav-options";
import Search from "./search";
import BottomNavBar from "./bottom-nav-options";

function App() {
  return (
      <BrowserRouter>
          <div className="row d-none d-md-block">
            <TopNavBar loggedIn='y'/>
          </div>
        <div className="container">
          <Routes>
            <Route index
                   element={<Home/>}/>
            <Route path="/search/:query"
                   element={<Search/>}/>
            {/*<Route path="/login"*/}
            {/*       element={<Login/>}/>*/}
          </Routes>
        </div>
          <div className="row d-block d-md-none">
              <BottomNavBar loggedIn='y'/>
          </div>
      </BrowserRouter>
  );
}
export default App;