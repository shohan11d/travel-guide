function ListView({ items, setItems, onToggle }) {
  return (
    <div className="bg-blue-400 px-12 py-10 grid grid-cols-4 justify-items-center">
      {items &&
        items.map((item) => (
          <ItemRender
            item={item}
            setItems={setItems}
            onToggle={onToggle}
            key={crypto.randomUUID()}
          />
        ))}
    </div>
  );
}

function ItemRender({ item, setItems, onToggle }) {
  function handleCrossBtn() {
    setItems((items) => items.filter((iteme) => item.id !== iteme.id));
  }
  console.log(item);

  return (
    <p className={`flex gap-3 ${item.packed ? "line-through" : ""}`}>
      <input
        type="checkbox"
        value={item.packed}
        onClick={() => onToggle(item)}
      />
      <span>{item.quantity}</span>
      <span>{item.description}</span>
      <button onClick={handleCrossBtn}>❌</button>
    </p>
  );
}

export default ListView;
