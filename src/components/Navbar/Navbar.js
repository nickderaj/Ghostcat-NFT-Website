import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
} from "./NavbarElements.js";
import { ButtonR } from "../Button/ButtonElements.js";
import { navLinks } from "./NavLinks.js";

const Navbar = (props) => {
  const [loadNav, setLoadNav] = useState(false);

  useEffect(() => {
    setLoadNav(true);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop({ duration: 100 });
  };

  const navbarAction = (link, index) => (
    <NavItem key={link.toLowerCase()}>
      <NavLinks
        to={link.toLowerCase()}
        smooth={true}
        spy={true}
        exact="true"
        duration={100}
        // offset={link.toLowerCase() === "gallery" ? -80 : 0}
        offset={-80}
        role={`navlink-${index}`}
      >
        {link}
      </NavLinks>
    </NavItem>
  );

  return (
    <Nav loadNav={loadNav}>
      <NavContainer>
        <NavLogo to="/" onClick={toggleHome}>
          GHOST CAT
        </NavLogo>
        <MobileIcon onClick={props.toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>{navLinks.map((el, i) => navbarAction(el, i))}</NavMenu>
        <NavBtn>
          <ButtonR primary={"true"} to="/" role="navbtn">
            OpenSea
          </ButtonR>
        </NavBtn>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
