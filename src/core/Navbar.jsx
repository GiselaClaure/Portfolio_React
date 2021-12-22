import React, { useState } from "react";
import styled from "styled-components";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 55px;
  right: 55px;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 100;
  cursor: pointer;
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "white" : "#66c5bf")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.6s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  margin: 0;
  li {
    padding: 18px 10px;
    text-decoration: none;
  }
  flex-flow: column nowrap;
  background-color: #a171d89f;
  position: fixed;
  z-index: 90;
  border-radius: 500px;
  transform: ${({ open }) =>
    open ? "translate(0,0)" : "translate(400px,-400px)"};
  top: 0;
  right: 0;
  height: 290px;
  width: 290px;
  padding: 0;
  margin: 10px;
  transition: transform 0.8s ease-in-out;
  li {
    color: #fff;
  }
  a {
    margin: 10px 0;
    text-decoration: none;
    color:white;
    font-size:20px
  }
  a:hover{
    color: #66c5bf;
  }
  
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Ul className="sidebar" open={open}>
          <a href="#About me" className="sidebar__item" onClick={() => setOpen(!open)}>
            ABOUT ME
          </a>
          <a href="#projects" className="sidebar__item" onClick={() => setOpen(!open)}>
            PROJECTS
          </a>
          <a href="#contact" className="sidebar__item" onClick={() => setOpen(!open)}>
            CONTACT
          </a>
      </Ul>
    </>
  );
};

export default Navbar;
