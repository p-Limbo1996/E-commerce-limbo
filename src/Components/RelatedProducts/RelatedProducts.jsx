import React from 'react'
import "./RelatedProducts.css"
import data_product from "../assets/data.js";
import Item from "../Item/Item.jsx";
const RelatedProducts = () => {


  return (
  
          <div className="relatedproducts">
      <h1>Ralated Products</h1>
      <hr  />
      <div className="relatedproducts-item">
        {data_product.map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </div>
    </div>
   
  )


}

export default RelatedProducts