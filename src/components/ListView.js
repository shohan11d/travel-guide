import { useState } from "react";

function ListView({ items, setItems, onToggle, onDelete }) {
  const [sorted, setSorted] = useState("input");

  let sortedItems;
  if (sorted === "input") sortedItems = items;
  if (sorted === "input") console.log("sort by input:", sortedItems);

  if (sorted === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sorted === "description")
    console.log("sort by description:", sortedItems);

  if (sorted === "status")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  if (sorted === "status") console.log("sort by status:", sortedItems);
  return (
    <>
      <div className="bg-blue-400 px-12 py-10 grid grid-cols-4 justify-items-center">
        {sortedItems &&
          sortedItems.map((item) => (
            <ItemRender
              item={item}
              setItems={setItems}
              onDelete={onDelete}
              onToggle={onToggle}
              key={crypto.randomUUID()}
            />
          ))}
      </div>
      <div className="bg-blue-400 text-center">
        <select value={sorted} onChange={(e) => setSorted(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="status">Sort by packed status</option>
        </select>
      </div>
    </>
  );
}

function ItemRender({ item, setItems, onToggle, onDelete }) {
  return (
    <p className={`flex gap-3 ${item.packed ? "line-through" : ""}`}>
      <input
        type="checkbox"
        value={item.packed}
        onClick={() => onToggle(item)}
      />
      <span>{item.quantity}</span>
      <span>{item.description}</span>
      <button onClick={() => onDelete(item)}>❌</button>
    </p>
  );
}

export default ListView;
