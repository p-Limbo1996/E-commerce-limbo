import React, { useContext } from 'react'
import { ShopContext } from "../Context/ShopContex";
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {

 
  const {all_product}  = useContext(ShopContext);
  const {productId}=useParams();
  const product =all_product.find((item)=>item.id===Number(productId))

  return (
    <div className='product'>
      
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product