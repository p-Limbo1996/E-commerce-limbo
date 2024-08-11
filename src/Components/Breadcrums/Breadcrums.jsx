import React from 'react'
import "./Breadcrums.css"
import arrow_icon from "../assets/breadcrum_arrow.png"

const Breadcrums = (props) => {

    const{product}=props;

  return (
    <div className='breadcrums' data-aos="fade-top">
         home <img src={arrow_icon} alt="" />
        shop <img src={arrow_icon} alt="" />
        {product.category} <img src={arrow_icon} alt="" />
        {product.name}
    </div>
  )
}

export default Breadcrums