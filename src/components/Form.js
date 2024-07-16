import { useState } from "react";

function Form({ onSubmit }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleNewItem(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = {
      id: crypto.randomUUID(),
      description: description,
      quantity: quantity,
      packed: false,
    };
    
    onSubmit(newItem)
  }

  return (
    <form
      className="bg-stone-500 flex justify-center items-center gap-10 p-5"
      onSubmit={handleNewItem}
    >
      <p>What do you need for your trip?</p>
      <select
        name=""
        id=""
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="bg-red-700 rounded-full py-2 px-5"
      >
        {Array.from({ length: 20 }, (v, i) => Number(i) + 1).map((v, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item"
        className="px-5 py-2 rounded-full"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit" className="bg-gray-400 rounded-full py-2 px-5">
        ADD
      </button>
    </form>
  );
}

export default Form;
