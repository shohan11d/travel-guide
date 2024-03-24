export function Item({ item, onToggleItem, onDeleteItem }) {
  return (
    <div className="space-x-4 m-2">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span>{item.description}</span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </div>
  );
}
