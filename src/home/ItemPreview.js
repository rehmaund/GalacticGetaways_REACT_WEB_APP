import React from "react";
import {Link} from "react-router-dom";

const ItemPreview = ({item}, {key}) => {
  console.log(item)
  return(
      <div className="col-xl-3 col-lg-4 col-md-4 col-6 pb-4">
        <div className="card card-primary">
          <img className="card-img-top" src={item.image}/>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.address.city}, {item.address.country}</p>
            <Link to={{pathname: "/details", query: item.xid}} className="btn btn-primary">See more</Link>
          </div>
        </div>
      </div>

  );
}
export default ItemPreview;