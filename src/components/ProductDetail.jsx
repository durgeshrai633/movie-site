import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./productdetails.css";

function ProductDetail() {
  const products = useSelector((state) => state.products);
  const { id } = useParams();

  return (
    <div className='product__container'>
      {products &&
        products.map((product) => {
          if (product.id == id) {
            return (
              <div className='product__card' key={product.id}>
                <img src={product.image} alt='' />
                <div className='product__card__desc'>
                  <h3 className='product__title'>
                    {product.title.toUpperCase()}
                  </h3>
                  <h4 className='product__brand'>
                    {"Brand: " + product.brand.toUpperCase()}
                  </h4>
                  <span className='products__category'>
                    {"Category: " + product.category.toUpperCase()}
                  </span>
                  <span className='products__price'>
                    {"Price: " + product.price + " Rs. Only"}
                  </span>
                </div>
              </div>
            );
          }
        })}
    </div>
  );
}

export default ProductDetail;
