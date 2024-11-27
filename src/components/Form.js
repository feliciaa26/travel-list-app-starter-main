import React, { useState } from "react";

export default function Form({handleAddItems}) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
  
  
    const handleInputChange = (event) => {
      setDescription(event.target.value);
    };
  
    const handleSelectChange = (event) => {
      setQuantity(Number(event.target.value)); 
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();

        if (description.trim() === "") {
          alert("Item description cannot be empty");
          return; 
        }
    
        const newItem = {
          id: Date.now(),
          description,
          quantity,
          packed: false
        };
  
      handleAddItems(newItem)
      setDescription(""); 
      setQuantity(1);
  
    }
  
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need to pack?</h3>
        <select name="quantity" id="quantity" value={quantity} onChange={handleSelectChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        
        <input
          type="text"
          placeholder="Item..."
          name="description"
          id="description"
          value={description}
          onChange={handleInputChange}
        />
        
        <button type="submit">Add</button>
      </form>
    );
  }