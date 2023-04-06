import Home from "./home";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import TopNavBar from "./top-nav-options";
import Search from "./search";
import {Provider} from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from "./search/search-reducer";
import BottomNavBar from "./bottom-nav-options";
import Login from "./login";
import Register from "./register";


const store = configureStore({
  reducer: {search: searchReducer}});

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="row d-none d-md-block">
            <TopNavBar loggedIn='y'/>
          </div>
          <div className="container">
            <Routes>
              <Route index
                     element={<Home/>}/>
              <Route path="/search/:place"
                     element={<Search/>}/>
              <Route path="/login"
                     element={<Login/>}/>
              <Route path="/register"
                     element={<Register/>}/>
            </Routes>
          </div>
          <div className="row d-block d-md-none">
            <BottomNavBar loggedIn='y'/>
          </div>
        </BrowserRouter>
      </Provider>
  );
}
export default App;