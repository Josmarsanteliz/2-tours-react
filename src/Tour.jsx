import React, { useState } from 'react';

const Tour = ({id,image,info,price,name,deleteItem}) => {
  const [readMore, setReadMore] = useState(false)
  return <article className='single-tour'>
    <img src={image} alt='tour'/>
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className='tour-price'>${price}</h4>
      </div>
      <p>{
        readMore ? info : `${info.substring(0,200)}...`
        }
        <button onClick={() => setReadMore(!readMore)}>{
          readMore ? 'Show Less' : 'read More'
          }</button>
        </p>
      <button onClick={() => deleteItem(id)} className='delete-btn'>not interesed</button>
    </footer>
  </article>;
};

export default Tour;
