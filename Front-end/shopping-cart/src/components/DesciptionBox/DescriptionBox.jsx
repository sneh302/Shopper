import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="discriptionbox">
      <div className="discriptionbox-navigator">
        <div className="discriptionbox-nav-box">Description</div>
        <div className="discriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="discriptionbox-description">
        <p>
          An e-commerce website is an online platform that enables businesses to
          sell products or services to customers over the internet. It typically
          includes features such as product listings, shopping carts, secure
          payment gateways, and order processing. Users can browse through the
          website, view product details, add items to their shopping carts, and
          complete transactions electronically.
        </p>
      </div>
    </div>
  );
};
