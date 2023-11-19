import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [bagModal, setBagModal] = useState(false);
  const [bagItems, setBagItems] = useState([]);
  function addToBag(newItem) {
    setBagItems((prevItems) => [...prevItems, newItem]);
  }
  function removeFromBag(id) {
    const removableItem = bagItems.find((item) => item.id == id);
    setBagItems((prevItems) =>
      prevItems.filter((item) => item !== removableItem)
    );
  }

  return (
    <Context.Provider
      value={{ bagItems, addToBag, removeFromBag, bagModal, setBagModal }}
    >
      {children}
    </Context.Provider>
  );
}
export { ContextProvider, Context };
