import ItemListContainer from "./items/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemCount from "./items/ItemCount";
import ItemDetail from "./items/ItemDetail";




const App = () => {
  return (
    <>
      <NavBar />
      <ItemDetailContainer />
      <ItemDetail />
    </>
  );
}


export default App;
