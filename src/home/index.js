import allContent from "./allContent.js";
import HomeSidebar from "./home-sidebar";
import quotes from "./quotes";
import ItemColumns from "../item-preview/item-columns";



function Home() {
  return (
      <div className="row w-100">
        <div className="col-lg-3 d-none d-lg-block">
          <HomeSidebar quotes={quotes}/>
        </div>
        {<ItemColumns allContent={allContent}/>}
      </div>
  );
}

export default Home