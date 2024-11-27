export default function Item({ item, handleDeleteItem, handleUpdateItem }) {
    const itemStyle = item.packed ? { textDecoration: 'line-through' } : null;
  
    return (
      <li style={itemStyle}>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => handleUpdateItem(item.id)}
        />
        {item.quantity} {item.description}
        <button onClick={() => handleDeleteItem(item.id)}>🗑️</button>
      </li>
    );
  }