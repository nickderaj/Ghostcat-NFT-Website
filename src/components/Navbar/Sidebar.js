import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  // SidebarMiniRoute, // for external links
  SidebarMenu,
  SideBtnWrap,
} from "./SidebarElements";
import { ButtonR } from "../Button/ButtonElements.js";
import { navLinks } from "./NavLinks";

const Sidebar = (props) => {
  const sidebarAction = (link) => (
    <SidebarLink
      key={link.toLowerCase()}
      to={link.toLowerCase()}
      smooth={true}
      spy={true}
      exact="true"
      duration={100}
      offset={link.toLowerCase() === "gallery" ? -80 : 80}
      onClick={props.toggle}
    >
      {link}
    </SidebarLink>
  );

  return (
    <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
      <Icon onClick={props.toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>{navLinks.map((el) => sidebarAction(el))}</SidebarMenu>
        <SideBtnWrap>
          <ButtonR to="/" big="true">
            OpenSea
          </ButtonR>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
