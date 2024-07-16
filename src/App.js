import Logo from "./components/Logo";
import Form from "./components/Form";
import ListView from "./components/ListView";
import Footer from "./components/Footer";

function App() {
  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
  ];

  return (
    <>
      <Logo />
      <Form />
      <ListView />
      <Footer/>
    </>
  );
}

export default App;
