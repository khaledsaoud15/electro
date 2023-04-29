import About from "./About";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import { products } from "./data";
import { useState } from "react";
import Liked from "./pages/Liked";

function App() {
  const [data, setData] = useState(products);
  const [cart, setCart] = useState([]);
  const [liked, setLiked] = useState([]);
  const [genra, setGenra] = useState("");
  const [filter, setFilter] = useState([]);
  return (
    <>
      <Nav cart={cart} liked={liked} />
      <Routes>
        <Route
          path="/"
          element={
            <Products
              data={data}
              liked={liked}
              setLiked={setLiked}
              cart={cart}
              setCart={setCart}
              genra={genra}
              filter={filter}
              setFilter={setFilter}
              setGenra={setGenra}
            />
          }
        />
        <Route path="/wish-list" element={<Liked liked={liked} />} />
      </Routes>

      {/* ti switch between components */}
    </>
  );
}

export default App;
