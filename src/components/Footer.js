function Footer({ items }) {
  const total = items.length;
  const packed = items.filter((item) => item.packed === true).length;
  const unpacked = total - packed;
  const percentage = (packed / total) * 100;
  // console.log("total:", total, "packed:", packed, "percentage:", percentage);

  if (total === 0)
    return (
      <div className="bg-green-400 p-5 text-center">
        <p>Please Start packing </p>
      </div>
    );
  if (total === packed)
    return (
      <div className="bg-green-400 p-5 text-center">
        <p>ALl items packed successfully</p>
      </div>
    );
  if (total === packed) return;
  return (
    <div className="bg-green-400 p-5 text-center">
      <p>Packing Done: {percentage}% </p>
    </div>
  );
}

export default Footer;
