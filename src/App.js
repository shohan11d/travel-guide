import { useState } from "react";
import { Form } from "./Form";
import { Logo } from "./Logo";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) => (item.id === id ? { ...item, packed: true } : item))
    );
  }
  function handleDeleteItem(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }
  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onToggleItem={handleToggleItem}
        ondeleteItem={handleDeleteItem}
      />
      <Stats />
    </div>
  );
}

export default App;
