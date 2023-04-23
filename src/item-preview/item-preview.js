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
          <div>
              <Link to={{pathname: `/details/${item.xid}`}} className="btn btn-primary float-end mt-1 ml-1">More</Link>
            <p className="card-text text-truncate override-card-text">{item.address.city ? `${item.address.city},`: `${item.address.country}`}</p>
              <p className="card-text text-truncate">{item.address.city  ? `${item.address.country}` : '\u00A0'}</p>
          </div>
        </div>
      </div>
  );
}
export default ItemPreview;