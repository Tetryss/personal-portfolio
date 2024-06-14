import { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 1rem;
  margin: 0;

  top: 0;
  height: 100vh;
  width: 15vw;

  display: flex;
  position: fixed;
  z-index: 1000;
  flex-wrap: wrap;
  gap: 4rem;
  flex-direction: column;
  justify-content: center;

  border-right: 2px solid #e07a5f;

  background-color: #282a3b;
  transform: translateX(-5rem);
  transition: 0.3s ease-in-out;
  opacity: 0;

  &:hover {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Links = styled.a`
  color: #e07a5f;
  text-decoration: none;
  font-size: 18px;
  transition: 0.2s ease-in-out;
  border-left: 2px solid #f2cc8f;
  padding-left: 0.5rem;
  margin-left: 4rem;

  &:hover {
    color: #f4f1de;
    border-left: 20px solid #f2cc8f;
    cursor: pointer;
  }
`;
function Navbar({ setLocation }) {
  return (
    <Nav>
      <Links
        onClick={() => {
          setLocation("home");
        }}
      >
        Home
      </Links>
      {/* <Links href="#about">About</Links> */}
      <Links
        onClick={() => {
          setLocation("portfolio");
        }}
      >
        Portfolio
      </Links>
      <Links
        onClick={() => {
          setLocation("contact");
        }}
      >
        Contact
      </Links>
    </Nav>
  );
}

export default Navbar;
