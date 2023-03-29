import React from "react";
import {Link} from "react-router-dom";

const ItemPreview = ({item}, {key}) => {
  return(
      <div className="card border-primary mb-4">
        <img className="card-img-top" src={item.preview.source}/>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <div>
            <Link to={{pathname: "/details", query: item.xid}} className="btn btn-primary float-end">See more</Link>
            <p className="card-text">{item.address.city}, {item.address.country}</p>
          </div>
          <div className="row w-100 pt-3">
            <span className="col-4 text-center">
              <i className="fa fa-heart"/>
              <span className="ms-2">423</span>
            </span>
            <span className="col-4 text-center">
              <i className="fa fa-star"/>
              <span className="ms-2">272</span>
            </span>
            <span className="col-4 text-center">
              <i className="fa fa-comment"/>
              <span className="ms-2">311</span>
            </span>
          </div>
        </div>
      </div>

  );
}
export default ItemPreview;