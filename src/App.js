import ItemListContainer from "./items/ItemListContainer";
import Navbar from "./components/NavBar";
import ItemCount from "./items/ItemCount";




const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer bebidas="Cerveza" />
      <ItemListContainer bebidas="Fernet" />
      <ItemCount initial={1} stock={10} />
      
    </>
  );
}


export default App;
