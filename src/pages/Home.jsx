import Products from "../components/Products";

const Home = (
  data,
  cart,
  setCart,
  liked,
  setLiked,
  genra,
  filter,
  setFilter,
  setGenra
) => {
  return (
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
  );
};

export default Home;
