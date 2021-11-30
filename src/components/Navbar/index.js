import React from "react";
import {
  NavLink,
  Nav,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import Logo from "../../assets/logo-7.png";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img className="__logo" src={Logo} alt="becs-logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/team" activeStyle>
            Meet the team
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
          <NavBtnLink to="/login">Chat Now!</NavBtnLink>
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to="/signup">Sign up</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;
