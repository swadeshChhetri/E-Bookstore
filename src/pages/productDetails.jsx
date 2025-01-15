import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({products}) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if(!products || products.length === 0) {
    return <h2>Product not found</h2>
  }

  return (
  <div id="product-details" className="card-wrapper">
      <div className="product-imgs">
        <div className="img-display">
          <div className="img-showcase">
            <img src={product.image} alt="Main Product" />
            <img src={product.image2} alt="Product View 2" />
            <img src={product.image3} alt="Product View 3" />
          </div>
        </div>
        <div className="img-select">
          <div className="img-item">
            <a href="#" data-id="1">
              <img src={product.image} alt="Product Thumbnail 1" />
            </a>
          </div>
          <div className="img-item">
            <a href="#" data-id="2">
              <img src={product.image2} alt="Product Thumbnail 2" />
            </a>
          </div>
          <div className="img-item">
            <a href="#" data-id="3">
              <img src={product.image3} alt="Product Thumbnail 3" />
            </a>
          </div>
        </div>
      </div>
      <div className="product-content">
        <div className="product-price">
          <p className="last-price">
            <span>${product.oldPrice}</span>
          </p>
          <p className="new-price">
            <span>${product.newPrice}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;