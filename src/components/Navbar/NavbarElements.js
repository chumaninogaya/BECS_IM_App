import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars, faBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #060520;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw-1000px) / 2);
  z-index: 10;
  position: sticky;
  top: 0;
`;

export const NavLink = styled(Link)`
  color: #fefefe;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    letter-spacing: 1px;
  }
  &.active {
    color: #9d9d9d;
    font-weight: bold;
    font-size: 17px;
    letter-spacing: 1px;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  //   margin-right: -24px;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display flex;
  align-items: center;
  margin-right: 24px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
  `;

export const NavBtnLink = styled(Link)`
  border-radios: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #000;
  }
`;
