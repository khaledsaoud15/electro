import React, { useEffect } from "react";
import { products } from "../data";
import styled from "styled-components";
import heart from "../icons/heart.svg";
import search from "../icons/search.svg";
import cartItem from "../icons/cart.svg";

const Products = ({
  data,
  cart,
  setCart,
  liked,
  setLiked,
  genra,
  filter,
  setFilter,
  setGenra,
}) => {
  // Add to cart function
  const addToCart = (id) => {
    const find = data.find((p) => p.id === id);
    setCart([...cart, find]);
  };

  //   add liked function
  const addToLiked = (id) => {
    const find = data.find((p) => p.id === id);

    if (liked.includes(find)) {
      liked.splice(liked.indexOf(find), 1);
      setLiked([...liked]);
    } else {
      setLiked([...liked, find]);
    }
  };

  useEffect(() => {
    if (genra === "") {
      setFilter(data);
      return;
    }
    const filteredData = data.filter((product) => product.category === genra);
    setFilter(filteredData);
  }, [genra]);

  return (
    <Container>
      <Header>
        <h1>New Products</h1>
        <div className="filter">
          <h3 onClick={() => setGenra("laptops")}>Laptops</h3>
          <h3 onClick={() => setGenra("smartphones")}>Smartphones</h3>
          <h3 onClick={() => setGenra("cameras")}>Cameras</h3>
          <h3 onClick={() => setGenra("accessories")}>Accessories</h3>
        </div>
      </Header>
      <Grid>
        {filter.map((p) => {
          return (
            <div className="card">
              <div className="overlay">
                <img src={heart} alt="" onClick={() => addToLiked(p.id)} />
                <img src={search} alt="" />
                <img src={cartItem} alt="" onClick={() => addToCart(p.id)} />
              </div>
              <div className="disc">
                {p.discount && <span>{p.discount}</span>}
                {p.new && <p>{p.new}</p>}
              </div>
              <img src={p.img} alt="" />
              <div className="content">
                <p>{p.category}</p>
                <h1>{p.title}</h1>
                <div className="prices">
                  <h2>{p.price}</h2>
                  <h4>$999.999</h4>
                </div>
              </div>
            </div>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Products;

const Container = styled.div`
  display: flex;
  height: 100%;
  padding: 80px 0;
  flex-direction: column;
  gap: 50px;
  width: 100%;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  .filter {
    display: flex;
    align-items: center;
    gap: 15px;
    h3 {
      font-size: 20px;
      cursor: pointer;
    }
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  gap: 35px;
  .card {
    height: 100%;
    border: 1px solid #ccc;
    width: 100%;
    gap: 15px;
    img {
      width: 100%;
    }
    transition: all 0.4s linear;
    position: relative;
    .overlay {
      position: absolute;
      height: 0;
      width: 100%;
      overflow: hidden;
      background-color: #af0724aa;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s linear;

      gap: 15px;
      img {
        width: 20px;
        padding: 5px;
        background-color: #000000cc;
        border-radius: 50%;
        cursor: pointer;
      }
    }

    :hover .overlay {
      height: 100%;
    }
  }
  .disc {
    display: flex;
    align-items: center;
    /* margin-left: auto; */
    width: 50%;
    gap: 5px;
    p {
      padding: 3px 6px;
      border: 2px solid #af0724;
    }
    span {
      padding: 3px 6px;
      background-color: #af0724;
      border: 2px solid #af0724;
      color: #fff;
    }
  }

  .content {
    display: flex;
    padding: 10px;
    flex-direction: column;
    text-align: center;

    h1 {
      color: #af0724;
      font-weight: 400;
    }
    p {
      opacity: 0.7;
      font-size: 14px;
      letter-spacing: 2px;
    }
  }
  .prices {
    display: flex;
    align-items: center;
    width: 50%;
    margin: 0 auto;
    gap: 5px;
    h2 {
      font-size: 23px;
    }
    h4 {
      font-size: 14px;
      font-weight: 400;
      opacity: 0.5;
      text-decoration: line-through;
    }
  }
`;
