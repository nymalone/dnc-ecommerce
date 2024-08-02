import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, title, description }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="buy-button">Comprar Look</button>
      </div>
    </div>
  );
};

export default ProductCard;
