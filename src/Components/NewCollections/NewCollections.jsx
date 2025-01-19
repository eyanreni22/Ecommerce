import React from 'react'
import  new_Collections from "../Assets/new_collections";
import './NewCollection.css'
import Item from '../Item/Item';



 const NewCollections = () => {
  return (
    <div className='newcollections'>
     <h1>NEW COLLECTIONS</h1>
     <hr />
     <div className="collections">
        {new_Collections.map((item,index)=>{
            return(
                <Item key={index} id={item.id} name={item.name} image={item.img} new_price={item.new_price} old_price={item.old_price}/>
            )
        })}

     </div>

    </div>
  )
}
 
export default NewCollections;

