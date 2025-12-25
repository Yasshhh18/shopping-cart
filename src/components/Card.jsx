import React from 'react'
import Shop from './Shop';
import '../styles/Card.css'

const Card = ({ item,handleClick }) => {

    const{title,author,img,price}=item
    
  return (
    <div className='cards'>
      <div className='image_box'>
        <img src={item.img}/>
      </div>
      <div className="details">
        <p>{item.title}</p>
        <p>{item.author}</p>
        <p>Price:{item.price}Rs</p>
        <button onClick={()=> handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Card
