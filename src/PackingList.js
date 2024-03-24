import { useState } from "react";

export function PackingList({ items, onToggleItem, onDeleteItem }) {
  //   const [sort, setSort] = useState("input");

  //   let sorted;

  //   if (sort === "input") sorted = items;

  //   if (sort === "description")
  //     sorted = items
  //       .slice()
  //       .sort((a, b) => a.description.localeCompare(b.description));
  //   if (sort === "status")
  //     sorted = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  //   console.log("sorted", sorted);
  return (
    <div className="bg-amber-800">
      <div className=" p-20 grid grid-cols-2 md:grid-cols-4  ">
        {items.map((item) => (
          <Item
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
            item={item}
            key={crypto.randomUUID()}
          />
        ))}
      </div>

      <div className="text-center pb-2">
        <button className="text-center">
          <select
            // value={sort}
            value={1}
            // onChange={(e) => setSort(e.target.value)}
            onChange={12}
          >
            <option value="input">Sort by INPUT</option>
            <option value="description">Sort by DESCRIPTION</option>
            <option value="status">Sort by STATUS</option>
          </select>
        </button>
      </div>
    </div>
  );
}

function Item({ item, onToggleItem, onDeleteItem }) {
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
