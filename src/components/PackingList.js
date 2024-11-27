import Item from "./Item";

export default function PackingList({ items, handleDeleteItem, handleUpdateItem }) {
    return (
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item key={item.id} item={item} handleDeleteItem={handleDeleteItem} handleUpdateItem={handleUpdateItem} />
          ))}
        </ul>
      </div>
    );
  }