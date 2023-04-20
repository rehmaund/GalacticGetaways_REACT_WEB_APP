import Home from "./home";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import TopNavBar from "./top-nav-options";
import Search from "./search";
import {Provider, useSelector} from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from "./search/search-reducer";
import BottomNavBar from "./bottom-nav-options";
import Login from "./login/index.js";
import Register from "./register";
import Profile from "./profile";
import authReducer from "./services/authentication/auth-reducer.js";


const store = configureStore({
  reducer: {search: searchReducer, user: authReducer}});

function App() {

  return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="row d-none d-md-block">
            <TopNavBar/>
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
              <Route path="/profile"
                     element={<Profile/>} />
            </Routes>
          </div>
          <div className="row d-block d-md-none">
            <BottomNavBar/>
          </div>
        </BrowserRouter>
      </Provider>
  );
}
export default App;