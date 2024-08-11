import React, { useEffect } from "react";
import "./Populer.css"
import data_product from "../assets/data.js";
import Item from "../Item/Item.jsx";


export const Populer = () => {

  return (
    <div className="popular" data-aos="zoom-in-right">
      <h1>POPULAR IN WOMEN</h1>
      <hr className="ok" />
      <div className="popular-item">
        {data_product.map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </div>
    </div>
  );
};
