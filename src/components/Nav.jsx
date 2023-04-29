import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import TopNav from "./TopNav";
import heart from "../icons/heart.svg";
import cartItem from "../icons/cart.svg";
import logo from "../images/logo.png";
import BottomNav from "./BottomNav";

const Nav = ({ cart, liked }) => {
  return (
    <Container>
      <TopNav />
      <CenterNav>
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
        <div className="inputs">
          <p>All Categories</p>
          <input type="text" placeholder="Search here" />
          <button>Search</button>
        </div>
        <div className="cart">
          <div className="icons">
            <NavLink to="/wish-list">
              <img src={heart} alt="" />
            </NavLink>
            <span>{liked.length}</span>
            <p>wish list</p>
          </div>
          <div className="icons">
            <img src={cartItem} alt="" />
            <span>{cart.length}</span>
            <p>your cart</p>
          </div>
        </div>
      </CenterNav>
      <BottomNav />
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const CenterNav = styled.div`
  height: 90px;
  background-color: #15161d;
  display: flex;
  align-items: center;
  padding: 0 80px;
  justify-content: space-between;
  border-bottom: 4px solid #af0724;
  .inputs {
    display: flex;
    align-items: center;
    width: 50%;
    background-color: #fff;
    padding: 0 0 0 15px;
    height: 40px;
    gap: 5px;
    border-radius: 80px;
    overflow: hidden;
    border-right: none;
    p {
      margin-right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      border-right: 1px solid #ccc;
      height: 100%;
      padding: 0 10px;
      width: 15%;
    }
    input {
      width: 60%;
      border: none;
      outline: none;
    }
    button {
      width: 25%;
      height: 100%;
      border: none;
      outline: none;
      background-color: #af0724;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .icons {
    img {
      width: 15px;
    }
  }

  .cart {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  .icons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: center;
    gap: 5px;

    position: relative;
    span {
      position: absolute;
      top: -30%;
      right: -20%;
      padding: 1px 7px;
      background-color: #af0724;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
    }
    img {
      margin: 0 auto;
    }
    color: #fff;
  }

  p {
    font-size: 12px;
  }
`;
