import React from "react";
import {Link} from "react-router-dom";

const ItemPreview = (item) => {
  console.log(item.title);
  return(
      <div className="card w-100">
        <img className="card-img-top" src={item.image}/>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.otherThing}</p>
          <Link to={{pathname: "/details", query: item.id}} className="btn btn-primary">See more</Link>
        </div>
      </div>
  );
}
export default ItemPreview;