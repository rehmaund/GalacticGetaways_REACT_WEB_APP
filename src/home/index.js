import allContent from "./allContent.js";
import HomeSidebar from "./home-sidebar";
import quotes from "./quotes";
import ItemPreview from "./ItemPreview";

function Home() {
  return (
      <div className="row w-100">
        <div className="col-lg-4 d-none d-lg-block">
          <HomeSidebar quotes={quotes}/>
        </div>
        <div className="row col-12 col-lg-8">
          {allContent.map(item => <ItemPreview item={item}/>)}
        </div>
      </div>
  );
}

export default Home