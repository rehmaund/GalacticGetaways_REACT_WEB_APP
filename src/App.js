import Home from "./home";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import TopNavBar from "./top-nav-options";
import Search from "./search";
import {Provider} from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from "./search/search-reducer";


const store = configureStore({
  reducer: {search: searchReducer}});

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <TopNavBar/>
          <div className="container">
            <Routes>
              <Route index
                     element={<Home/>}/>
              <Route path="/search/:place"
                     element={<Search/>}/>
              {/*<Route path="/login"*/}
              {/*       element={<Login/>}/>*/}
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
  );
}
export default App;