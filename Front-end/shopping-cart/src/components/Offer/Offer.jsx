import React from "react";
import "./Offer.css";
import exclusive_image from "../Assets/exclusive_image.png";

export const Offer = () => {
  return (
    <div className="offer">
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offer-right">
        <img src={exclusive_image} alt="" height={"85%"} className="offer-right-img"/>
      </div>
    </div>
  );
};
