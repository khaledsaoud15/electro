import React from "react";
import phone from "../icons/phone.svg";
import mail from "../icons/mail.svg";
import location from "../icons/location.svg";
import dollar from "../icons/dollar.svg";
import person from "../icons/user.svg";
import styled from "styled-components";

const TopNav = () => {
  return (
    <Container>
      <Left>
        <div className="icon">
          <img src={phone} alt="" />
          <p>+021-95-51-84</p>
        </div>

        <div className="icon">
          <img src={mail} alt="" />
          <p>email@email.com</p>
        </div>

        <div className="icon">
          <img src={location} alt="" />
          <p>1734 Stonecoal Road</p>
        </div>
      </Left>
      <Right>
        <div className="icon">
          <img src={dollar} alt="" />
          <p>USD</p>
        </div>
        <div className="icon">
          <img src={person} alt="" />
          <p>My Account</p>
        </div>
      </Right>
    </Container>
  );
};

export default TopNav;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  height: 40px;
  background-color: #1e1f29;
  color: #eee;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  .icon {
    display: flex;
    align-items: center;
    gap: 5px;
    img {
      width: 15px;
    }
    p {
      font-size: 14px;
    }
  }
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  .icon {
    display: flex;
    align-items: center;
    gap: 5px;
    img {
      width: 15px;
    }
    p {
      font-size: 14px;
    }
  }
`;
