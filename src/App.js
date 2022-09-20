import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./items/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemCount from "./items/ItemCount";
import ItemDetail from "./items/ItemDetail";
import ItemList from "./items/ItemList";
import ItemDetailContainer from "./items/ItemDetailContainer"




const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/" element={<ItemListContainer />}
        />
        <Route
          path="/categoria/:categoria"
          element={<ItemListContainer/>}
        />
        <Route
          path="/id" element={<ItemDetailContainer />}
        />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
