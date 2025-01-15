import React from "react";
import './OrderStatus.css';

const OrderStatus = () => {
  return (
    <>
      <section className="container">
        <div className="Search-box">
          <input type="text" />
          <span>
            <button>Search Orders</button>
          </span>
        </div>
        <div className="items-container">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h4>Tp-Link Archer T2UB Nano AC600</h4>
            <h5>Color:Black</h5>
          </div>
          <div>Price: 1,002</div>
          <div>
            <h4>
              <strong>Delivered on Oct 14</strong>
            </h4>
            <h5>Your Item has been delivered</h5>
            <h4>
              <strong>Rate & Review Product</strong>
            </h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderStatus;
