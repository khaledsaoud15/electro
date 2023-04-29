import React from "react";
import styled from "styled-components";

const BottomNav = () => {
  return (
    <Container>
      <a href="">Home</a>
      <a href="">Hot Deals</a>
      <a href="">Categories</a>
      <a href="">Laptops</a>
      <a href="">Smartphone</a>
      <a href="">Camers</a>
      <a href="">Accessories</a>
    </Container>
  );
};

export default BottomNav;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 80px;
  height: 60px;
  gap: 25px;
  border-bottom: 2px solid #ccc;
  a {
    text-decoration: none;
    color: #000;
    position: relative;
    ::after {
      content: "";
      position: absolute;
      top: 120%;
      left: 0;
      width: 0%;
      background-color: #af0724;
      height: 2px;
      transition: all 0.2s linear;
    }

    :hover::after {
      width: 100%;
    }
  }
`;
