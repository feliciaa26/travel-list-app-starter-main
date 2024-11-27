import React, { useState } from "react";
import Logo from "./Logo"
import Form from "./Form"
import Item from "./Item"
import PackingList from "./PackingList";
import Stats from "./Stats"


function App() {
  const [items, setItems] = useState([]);
  const [sortOption, setSortOption] = useState("input");

  const handleAddItems = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]); 

  };

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleUpdateItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearAll = () => {
    setItems([]); 
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedItems = () => {
    switch (sortOption) {
      case "packed":
        return [...items].sort((a, b) => a.packed - b.packed);
      case "input":
      default:
        return items; 
    }
  };


  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <div className="sort-options">
        <label>Sort By: </label>
        <select value={sortOption} onChange={handleSortChange}>
          <option value="input">Input Order</option>
          <option value="packed">Packed Status</option>
        </select>
      </div>
      <PackingList
        items={sortedItems()}  
        handleDeleteItem={handleDeleteItem}
        handleUpdateItem={handleUpdateItem}
      />
      <button className="clear-button" onClick={handleClearAll}>Clear All</button>
      <Stats items={items} />
    </div>
  );
}


export default App;
