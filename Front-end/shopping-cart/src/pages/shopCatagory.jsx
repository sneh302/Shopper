import React from "react";
import "./CSS/ShopCatagory.css";
import { useContext } from "react";
import { ShopContext } from "../contex/ShopContext";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import { Item } from "../components/Item/Item";

export const ShopCatagory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-catagory">
      <img src={props.banner} alt="" className="shopcatagory-banner" />
      <div className="shopcatagory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
        <div className="shopcatagory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcatagory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcatagory-lodemore">Explore more</div>
    </div>
  );
};
