import React, { useState } from "react";
import ItemList from "../ItemList/ItemLIst";
import {produce} from "../StoreItems/StoreItems";
import './GroceryCart.css'

//nuestro componente
//usamos useState,e inicializamos el state valiendo []
export default function GroceryCart() {
  const [cart, setCart] = useState([]);
//evente handler
//utilizamos spread sintax ... para hacer uan copia de los elementos del array, cada vez que añadimos un elemento
  const addItem = (item) => {
    setCart((prev) => {
      return [item, ...prev];
    });
  };
//event handler para quitar producto
  const removeItem = (targetIndex) => {
    setCart((prev) => {
      return prev.filter((item, index) => index !== targetIndex);
    });
  };

  return (
    <div className='lista'>
      <h1 className='encabezado-lista'>Lista de la compra <img 
      className='imagen-lista' src="https://images.vexels.com/media/users/3/151869/isolated/lists/767ca771755f4675d4063c03e17c8595-icono-de-lista-de-verificacion-medica.png"
       alt='icono lista' />
       </h1>
      <ul>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}
          className='decoracion' >
            {item} <button className='quitar'>X</button>
          </li>
        ))}
      </ul>
      <h2>Productos</h2>
      <ItemList items={produce} onItemClick={addItem}
      className='productos' />
    </div>
  );
}
