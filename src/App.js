import Home from "./home";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import TopNavBar from "./top-nav-options";
import Search from "./search";
import Detail from "./detail";
import {Provider, useSelector} from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from "./search/search-reducer";
import commentsReducer from "./detail/comments/comments-reducer";
import BottomNavBar from "./bottom-nav-options";
import Login from "./login/index.js";
import Logout from "./logout/index.js";
import Register from "./register";
import Profile from "./profile";
import authReducer from "./users/auth-reducer.js";
import usersReducer from "./users/users-reducer.js"
import CurrentUserContext from "./components/load-profile";
import countersReducer from "./detail/counters-reducer";
import interactionsReducer from "./detail/interactions-reducer";
import flagsReducer from "./flag/flags-reducer";
import ReviewFlagged from "./flag/review-flags";


const store = configureStore({
  reducer: {
    search: searchReducer,
    user: authReducer,
    allUsers: usersReducer,
    comments: commentsReducer,
    counters: countersReducer,
    interactions: interactionsReducer,
    flags: flagsReducer,
  }});

function App() {
  return (
      <Provider store={store}>
        <CurrentUserContext>
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
              <Route path="/details/:xid"
                      element={<Detail/>}/>
              <Route path="/login"
                     element={<Login/>}/>
              <Route path="/logout"
                     element={<Logout/>}/>
              <Route path="/register"
                     element={<Register/>}/>
              <Route path="/profile"
                     element={<Profile/>} />
              <Route path="/review"
                      element={<ReviewFlagged/>}/>
            </Routes>
          </div>
          <div className="row d-block d-md-none">
            <BottomNavBar/>
          </div>
        </BrowserRouter>
        </CurrentUserContext>
      </Provider>
  );
}
export default App;