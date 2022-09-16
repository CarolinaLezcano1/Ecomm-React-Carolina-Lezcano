import ItemListContainer from "./items/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemCount from "./items/ItemCount";
import ItemDetail from "./items/ItemDetail";
import ItemList from "./items/ItemList";
import ItemDetailContainer from "./items/ItemDetailContainer"




const App = () => {
  return (
    <>
      <NavBar />
      <ItemDetailContainer />
      <ItemCount initial={1} stock={10} />
      </>
  );
}


export default App;
