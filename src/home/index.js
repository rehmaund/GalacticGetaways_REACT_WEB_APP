import allContent from "./allContent.js";
import HomeSidebar from "./home-sidebar";
import quotes from "./quotes";
import ItemColumns from "../item-preview/item-columns";



function Home() {
  return (
      <div className="container">
      <div className="row w-100 pb-5">
        <div className="d-none d-lg-block w-25 float-start">
          <HomeSidebar quotes={quotes}/>
        </div>
        {<ItemColumns allContent={allContent}/>}
      </div>
      </div>
  );
}

export default Home