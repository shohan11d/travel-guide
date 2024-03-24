import { useState } from "react";
import { Item } from "./Item";

export function PackingList({
  items,
  onToggleItem,
  onDeleteItem,
  onClearList,
}) {
  const [sort, setSort] = useState("input");

  let sorted;

  if (sort === "input") sorted = items;

  if (sort === "description")
    sorted = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sort === "status")
    sorted = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  console.log("sorted", sorted);
  return (
    <div className="bg-[#5a3e2b]">
      <div className=" p-20 grid grid-cols-2 md:grid-cols-4  ">
        {sorted.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </div>

      <div className="text-center space-x-3 pb-4">
        <select
          className="bg-[#ffebb3] border rounded-full  pl-5 text-sm"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="input">Sort by INPUT</option>
          <option value="description">Sort by DESCRIPTION</option>
          <option value="status">Sort by STATUS</option>
        </select>
        <button
          className="bg-[#ffebb3] border rounded-full  px-2 text-sm"
          onClick={onClearList}
        >
          ClearList
        </button>
      </div>
    </div>
  );
}
