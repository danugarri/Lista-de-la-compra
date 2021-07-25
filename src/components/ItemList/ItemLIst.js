import React from "react";
import '../GroceryCart/GroceryCart.css'

export default function ItemList({ items, onItemClick }) {
  const handleClick = ({ target }) => {
    const item = target.value;
    onItemClick(item);
  };

  /* ojo!! se utiliza value y key*/
  return (
    <div className='contenedor'>
      {items.map((item, index) => (
        <button value={item} onClick={handleClick} key={index}
        className='productos'>
          {item}
        </button>
      ))}
    </div>
  );
}
