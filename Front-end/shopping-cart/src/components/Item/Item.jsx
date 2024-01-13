import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" className="item-img"/>
      </Link>
      <p>{props.name}</p>
      <div className="item-price">
        <div className="new-item-price">${props.new_price}</div>
        <div className="old-item-price">${props.old_price}</div>
      </div>
    </div>
  );
};
