import React, { useContext } from 'react'
import './CSS/shopcategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.jpeg'
import Item from '../Components/Item/Item'

 const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext);
  return (
    <div className='shopcategory'>
      <img src={props.banner} alt=""  />
      <div className="shopcategory.indexSort">
       <p><span>showing 1-16</span>out of 38 products</p>
       <div className="shopCategory-sort">
        sort by <img src={dropdown_icon} alt="" width={20} />
       </div>
      </div>
      <div className="shopcategory-products">
      {all_products.map((item,index)=>{
             if(props.category===Item.category){
             return (
                <Item key={index} id={item.id} name={item.name} image={item.img} new_price={item.new_price} old_price={item.old_price}/>
                )
             } else{
              return null;
             }
            })}

      </div>
      <div className="shopcategory-Loadmore">
      Explore More
      </div>
</div>
  )
}
export default ShopCategory;


