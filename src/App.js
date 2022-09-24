import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./items/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemCount from "./items/ItemCount";
import ItemDetail from "./items/ItemDetail";
import ItemList from "./items/ItemList";
import ItemDetailContainer from "./items/ItemDetailContainer";
import Cart from "./components/Cart";
import  CartContextProvider  from "./components/CartContext";


const App = () => {
  return (
    <CartContextProvider>
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
          path="/item/:id" element={<ItemDetailContainer />}
        />
        <Route
        path="/cart" element={<Cart/>}
        />
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}


export default App;
