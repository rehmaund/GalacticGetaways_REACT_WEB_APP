import Home from "./home";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import TopNavBar from "./top-nav-options";
import Search from "./search";

function App() {
  return (
      <BrowserRouter>
        <TopNavBar/>
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
      </BrowserRouter>
  );
}
export default App;