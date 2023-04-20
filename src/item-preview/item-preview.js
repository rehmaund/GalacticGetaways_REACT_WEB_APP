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
            <Link to={{pathname: `/details/${item.xid}`}} className="btn btn-primary float-end">See more</Link>
            <p className="card-text">{item.address.city}, {item.address.country}</p>
          </div>
        </div>
      </div>

  );
}
export default ItemPreview;