import React, { useContext } from "react";
import { ShopContext } from "../contex/ShopContext";
import { useParams } from "react-router-dom";
import { Breadcrum } from "../components/BreadCrums/Breadcrum";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import { DescriptionBox } from "../components/DesciptionBox/DescriptionBox";
import { RelatedProduct } from "../components/RelatedProduct/RelatedProduct";

export const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  );
};
