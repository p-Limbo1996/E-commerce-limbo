import React from "react";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <div className="newsletter" data-aos="fade-up"
    data-aos-duration="1000">
      <h1>Get Exclusive Ofeers On Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
