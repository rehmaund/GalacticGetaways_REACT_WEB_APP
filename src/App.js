import Home from "./home";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import TopNavBar from "./top-nav-options";
import Search from "./search";
import Detail from "./detail";
import {Provider} from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from "./search/search-reducer";
import commentsReducer from "./detail/comments/comments-reducer";
import BottomNavBar from "./bottom-nav-options";


const store = configureStore({
  reducer: {search: searchReducer, comments: commentsReducer}});

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
              <Route path="/details/:xid"
                      element={<Detail/>}/>
              {/*<Route path="/login"*/}
              {/*       element={<Login/>}/>*/}
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