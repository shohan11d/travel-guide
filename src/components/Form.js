function Form() {
  function handleSubmit(e) {
    e.preventDefault();
     console.log("submitted");
  }

  return (
    <form
      className="bg-stone-500 flex justify-center items-center gap-10 p-5"
      onSubmit={handleSubmit}
    >
      <p>What do you need for your trip?</p>
      <select name="" id="" className="bg-red-700 rounded-full py-2 px-5">
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
      />

      <button type="submit" className="bg-gray-400 rounded-full py-2 px-5">
        ADD
      </button>
    </form>
  );
}

export default Form;
