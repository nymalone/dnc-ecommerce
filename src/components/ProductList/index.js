import React from "react";
import ProductCard from "../ProductCard";
import products from "../../utils/mockProducts";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductList;
