import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  makeApiCall,
  sortHighToLow,
  sortLowToHigh,
} from "../features/productSlice";
import "./product.css";
function Product() {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.products);
  const handleSort = (e) => {
    if (e.target.value == "lowtohigh") {
      if (products.length) {
        dispatch(sortLowToHigh());
      }
    } else {
      if (products.length) {
        dispatch(sortHighToLow());
      }
    }
  };
  useEffect(() => {
    dispatch(makeApiCall());
  }, [dispatch]);
  return (
    <div>
      <h2 style={{ textAlign: "center",margin:"30px" }}>Products</h2>
      <div className='select__sort'>
        <h3>Sort By Price:</h3>
        <select name='sort' id='sort' onChange={handleSort}>
          <option value='lowtohigh'>Low to high</option>
          <option value='hightolow'>High to low</option>
        </select>
      </div>
      <div className='products'>
        {products.length &&
          products.map((product, index) => {
            return (
              <div className='products__card' key={product.id}>
                <img src={product.image} alt='' />
                <div className='products__card__desc'>
                  <h3 className='products__title'>
                    {product.title.toUpperCase()}
                  </h3>
                  <h4 className='products__brand'>
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
          })}
      </div>
    </div>
  );
}

export default Product;
