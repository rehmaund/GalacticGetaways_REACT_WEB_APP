import React from "react";
import ItemPreview from "./item-preview";

const ItemColumn = ({columnContent}, {key}) => {
  return(
      <div className="col-xl-3 col-lg-4 col-md-4 col-6 pb-4">
        {
          columnContent.map(item =>
              <ItemPreview item={item} key={item.xid}/>)
        }
      </div>
  );
}
export default ItemColumn;