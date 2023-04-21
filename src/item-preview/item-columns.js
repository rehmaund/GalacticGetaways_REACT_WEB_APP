import React from "react";
import ItemColumn from "./item-column";


const ItemColumns = ({allContent}) => {
  const w = window.innerWidth;
  let numColumns;
  if (w < 768) {
    numColumns = 2;
  } else if (w >= 1200) {
    numColumns = 3;
  } else if (w >= 992) {
    numColumns = 2;
  } else {
    numColumns = 3;
  }

  const columns = [];
  for (let i = 0; i < numColumns; i++) {
    columns.push([]);
  }
  let c = 0;
  // takes out full list of items and puts them one by one into column arrays
  for (let i = 0; i < allContent.length; i++) {
    columns[c].push(allContent[i]);
    if (c === numColumns - 1) {
      c = 0;
    } else {
      c++;
    }
  }
  return(
      <>
      {columns.map((columnItems, c) =>
              <ItemColumn columnContent={columnItems} key={c}/>)}
      </>
  );
}
export default ItemColumns;




