import HomeFeedColumn from "./HomeFeedColumn";
import allContent from "./allContent.js";
import HomeSidebar from "./home-sidebar";
import quotes from "./quotes";


const columns = [[], [], [], [], [], []];
let c = 0;

// takes out full list of items and puts them one by one into the arrays above (for each column)
for (let item of allContent) {
  columns[c].push(item)
  if (c === columns.length - 1) {
    c = 0
  } else {
    c++
  }
}


function Home() {
  return (
      <div className="row">
        <div className="col-4">
          <HomeSidebar quotes={quotes}/>
        </div>
        <div className="col-8">
        {columns.map(column => HomeFeedColumn(column))}
        </div>
      </div>
  );
}

export default Home