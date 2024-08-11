import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContex";
import dropdown_icon from "../Components/assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import "./ShopCategory.css"

const ShopCategory = (props) => {
 

  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category"  data-aos="fade-left">
      <img className="shop-category-banner" src={props.baner} alt=""   />
      
      <div className="shopcategory-indexsort">
        <p>
          <span>showing  1-12 </span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shopcategory-products"   >
        {all_product.map((item, i) => {

          if (props.category===item.category) {
            return <Item key={i} {...item} />
          }
          else{ return null}
        }  
        )}
      </div>

      <div className="shopcategory-loadmore">
        Explore more
      </div>
    </div>
  );
};

export default ShopCategory;
