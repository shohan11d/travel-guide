import { useState } from "react";

export function Form({ onAddItems }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description: description,
      quantity: quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <div className="p-10 bg-[#e5771f]">
      <form className="space-x-5 text-center" onSubmit={handleSubmit}>
        <select
          className="bg-[#ffebb3]"
          value="quantity"
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (value, index) => index + 1).map(
            (num) => (
              <option value={num} key={crypto.randomUUID()}>
                {num}
              </option>
            )
          )}
        </select>
        <input
          className="bg-[#ffebb3] border rounded-full py-1 pl-5"
          placeholder="item..."
          type="text"
          name=""
          id=""
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="rounded-full bg-blue-300 px-4 py-1" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
}
