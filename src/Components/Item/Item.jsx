import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'
const Item = ({id,name,image,new_price,old_price}) => {


  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className='item'  data-aos="flip-left">

        <Link to={`/product/${id}`}><img src={image} onClick={handleClick} alt="" /></Link>
        <p>{name}</p>

        <div className="item-prices">
            <div className="item-price-old">${old_price}</div>
            <div className="item-price-new">${new_price}</div>
        </div>

    </div>
  )
}

export default Item