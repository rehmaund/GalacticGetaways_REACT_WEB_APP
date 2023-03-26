
// import Profile from "./profile";
import Home from "./home";
// import Search from "./search";
// import Login from "./login";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import TopNavBar from "./top-nav-options";

function App() {
  return (
      <BrowserRouter>
        <TopNavBar/>
        <div className="container">
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