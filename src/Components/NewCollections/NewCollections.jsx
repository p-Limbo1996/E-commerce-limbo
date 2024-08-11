import React from 'react'
import "./NewCollections.css"
import new_collections from "../assets/new_collections"
import Item from '../Item/Item'

const NewCollections = () => {
  return (

  
    <div className="new-collections" data-aos="zoom-in-right">
    <h1>NEW COLLECTIONS  </h1>
    <hr />
         <div className="collections">
             {new_collections.map((item,i)=>(
             <Item  key={item.id} {...item}/>
             ))}
         </div>
    </div>
  )
}

export default NewCollections