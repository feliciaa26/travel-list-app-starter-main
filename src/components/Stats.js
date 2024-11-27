export default function Stats({ items }) {
    const totalItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const packedPercentage = totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);
  
    return (
      <footer className="stats">
        <em>
          {packedPercentage === 100 && totalItems > 0
            ? "You got everything!"
            : `You have ${totalItems} items. You already packed ${packedItems} (${packedPercentage}%).`}
        </em>
      </footer>
    );
  }