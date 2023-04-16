import React from "react";
import {Link} from "react-router-dom";
import '../index.css';

const ItemPreview = ({item}, {key}) => {
  return(
      <div className="card border-primary mb-4">
        <div className="preview-image-container">
          <img className="card-img-top" src={item.preview.source}/>
        </div>
        <div className="card-body">
          <h5 className="card-title text-truncate">{item.name}</h5>
          <p className="card-text">{item.address.city}, {item.address.country}</p>
          <div>
            <Link to={{pathname: "/details", query: item.xid}} className="btn btn-primary">See more</Link>
          </div>
          <div className="row w-100 pt-3">
            <span className="col-4 text-center">
              <i className="fa fa-heart"/>
              <span className="ms-1 preview-font-size">423</span>
            </span>
            <span className="col-4 text-center">
              <i className="fa fa-star"/>
              <span className="ms-1 preview-font-size">272</span>
            </span>
            <span className="col-4 text-center">
              <i className="fa fa-comment"/>
              <span className="ms-1 preview-font-size">311</span>
            </span>
          </div>
        </div>
      </div>

  );
}
export default ItemPreview;