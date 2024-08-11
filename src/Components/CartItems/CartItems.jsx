import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContex";
import remove_icon from "../assets/cart_cross_icon.png";
import { Link } from "react-router-dom";

const CartItems = () => {
  const {getTotalCartAmount, all_product, cartItems, removeFromCart } =useContext(ShopContext);

  return (
    <div className="cartitems" >
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        {all_product.map((item) => {
      
          if (cartItems[item.id] > 0) {
            return (
              <div>
                <div  className="cartitems-format cartitems-format-main">
                  <Link to={`/product/${item.id}`}>
                    <img
                      src={item.image}
                      alt=""
                      className="carticon-product-icon"
                    />
                  </Link>
                  <p>{item.name}</p>
                  <p>${item.new_price}</p>
                  <button className="cartitems-quantity">
                    {cartItems[item.id]}
                  </button>
                  <p>${item.new_price * cartItems[item.id]}</p>
                  <img
                    className="cartitems-remove-icon"
                    src={remove_icon}
                    onClick={() => removeFromCart(item.id)}
                    alt=""
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>cart Totals</h1>
            <div>
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
