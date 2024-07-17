import Logo from "./components/Logo";
import Form from "./components/Form";
import ListView from "./components/ListView";
import Footer from "./components/Footer";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  const [items, setItems] = useState([]);

  function handleSubmit(item) {
    setItems(() => [...items, item]);

  }

  function handleToggle(item) {
    setItems((items) =>
      items.map((iteme) =>
        iteme.id === item.id ? { ...iteme, packed: !item.packed } : iteme
      )
    );
  }

  function handleDelete(item) {
    setItems((items) => items.filter((iteme) => item.id !== iteme.id));
  }
  return (
    <>
      <Logo />
      <Form onSubmit={handleSubmit} />
      <ListView
        items={items}
        onDelete={handleDelete}
        onToggle={handleToggle}
        setItems={setItems}
      />
      <Footer items={items} />
    </>
  );
}

export default App;
