import HomeFeedColumn from "./HomeFeedColumn";
import allContent from "./allContent.js";


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
        {columns.map(column => HomeFeedColumn(column))}
      </div>
  );
}

export default Home