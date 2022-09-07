import Productos from "./components/Productos";
import Navbar from "./components/NavBar";



const App = () => {
  return (
    <>
      <Navbar />
      <Productos bebidas="Cerveza" />
      <Productos bebidas="Fernet" />
    </>
  );
}


export default App;
