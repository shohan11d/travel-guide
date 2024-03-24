export function Stats({ items }) {
  const totalItmes = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = (packedItems / totalItmes) * 100;
  if (!totalItmes)
    return (
      <div className="bg-black text-white p-8 text-center">
        Start adding some items to your packing list 🚀
      </div>
    );
  if (totalItmes)
    return (
      <div className="bg-black text-white p-8 text-center">
        {totalItmes === packedItems
          ? `You packed everything`
          : `You have ${totalItmes} item on your list, and you already packed ${packedItems} item (${percentage}%)`}
      </div>
    );
}
