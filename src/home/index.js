import allContent from "./allContent.js";
import HomeSidebar from "./home-sidebar";
import quotes from "./quotes";
import ItemPreview from "./ItemPreview";

function Home() {
  return (
      <div className="container">
      <div className="row w-100">
        <div className="col-lg-4 col-xl-4 col-xxl-4 d-none d-lg-block">
          <HomeSidebar quotes={quotes}/>
        </div>
        <div className="row col-12 col-lg-8 col-xl-8 col-xxl-8">
          {allContent.map(item => <ItemPreview item={item} key={item._id}/>)}
        </div>
      </div>
      </div>
  );
}

export default Home