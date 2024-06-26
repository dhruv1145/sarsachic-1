import React from "react";
import "./ShopSections.css";
import women from "../../images/women.jpg";
import men from "../../images/men.jpg";
import oversized from "../../images/oversized.jpg";

const ShopSections = () => {
  return (
    <div className="shop-sections">
      <div className="section womens">
        <span className="label">SHOP WOMENS</span>
        <img src={women} alt="Shop Womens" />
      </div>
      <div className="section mens">
        <span className="label">SHOP MENS</span>
        <img src={men} alt="Shop Mens" />
      </div>
      <div className="section oversized">
        <span className="label">SHOP OVERSIZED</span>
        <img src={oversized} alt="Shop Oversized" />
      </div>
    </div>
  );
};

export default ShopSections;
