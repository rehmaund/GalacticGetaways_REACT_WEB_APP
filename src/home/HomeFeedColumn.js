import React from "react";
import ItemPreview from "./ItemPreview";

const HomeFeedColumn = (columnContent) => {
  return(
      <div className="col-2">
        {
          columnContent.map(item =>
              ItemPreview(item))
        }
      </div>
  );
}
export default HomeFeedColumn;