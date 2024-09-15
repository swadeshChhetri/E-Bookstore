import React from "react";
import "./HomeSec.css";

const Home = () => {
  return (
    <section>
      <div className="home">
        <img src="image/trending-title-24.svg" alt="" />
      </div>
      <div className="data">
        <div>
          <span>
            <img src="image/Icon-books.svg" alt="" />
          </span>
          <h1>38M+</h1>
          <p>BOOKS DONATED</p>
        </div>
        <div>
          <span className="o">
            <img src="image/Icon-literacy.svg" alt="" />
          </span>
          <h1>$35M+</h1>
          <p>
            FUNDS RAISED FOR <br />
            LIBRARIES & LITERACY
          </p>
        </div>
        <div>
          <span className="o">
            <img src="image/Icon-recycle.svg" alt="" />
          </span>
          <h1>475M+</h1>
          <p>
            BOOKS REUSED <br /> OR RECYCLED
          </p>
        </div>
        <div>
          <span className="o">
            <img src="image/Icon-people.svg" alt="" />
          </span>
          <h1>87M+</h1>
          <p>CUSTOMERS SERVED</p>
        </div>
      </div>
      <div className="exciting">
        <div>
          <a href="">
            <span>
              <img src="image/offers_icon.jpg" alt="" />
            </span>
            <br className="gap" /> OFFERS & <br />
            <span>DEALS</span>
          </a>
        </div>
        <div>
          {" "}
          <a href="">
            <img src="image/rewards_icon.jpg" alt="" />
            <br className="gap" /> BOOKERFLY <br />
            <span className="r">REWARDS</span>
          </a>
        </div>
        <div>
          <a href="">
            <img src="image/gift_icon.jpg" alt="" />
            <br className="gap" />
            <span className="g">GIFT</span> <br /> CERTIFICATES
          </a>
        </div>
        <div>
          <a href="">
            <img src="image/bargain_icon.jpg" alt="" />
            <br className="gap" />
            SHELF <br /> STEALS
          </a>
        </div>
        <div>
          {" "}
          <a href="">
            <img src="image/bestsellers_icon.jpg" alt="" />
            <br className="gap" />
            <span className="o">OUR</span> <br />
            BESTSELLER
          </a>
        </div>
        <div>
          {" "}
          <a href="">
            <img src="image/newreleases_icon.jpg" alt="" />
            <br className="gap" />
            <span className="n">NEW</span> <br />
            RELEASES
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
