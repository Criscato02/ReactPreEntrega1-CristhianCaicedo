import React, { createContext, useState } from 'react';

export const cartContext = createContext();

function CartProvider({ defaultValues = [], children }) {
  const [productos, setProductos] = useState([]);

  function addItem(item) {
    setProductos([...productos, item]);
  }

  return (
    <cartContext.Provider
      value={{
        addItem,
        quantity: productos.length,
        productos,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartProvider;
