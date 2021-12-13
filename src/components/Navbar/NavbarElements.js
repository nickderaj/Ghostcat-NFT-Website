import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  height: 8rem;
  margin-top: -8rem;
  display: flex;
  visibility: ${({ loadNav }) => (loadNav ? "visible" : "hidden")};
  opacity: ${({ loadNav }) => (loadNav ? 1 : 0)};
  justify-content: center;
  background: #000;
  align-items: center;
  font-size: 1.8rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 1s all ease-in-out;

  /* @media screen and (max-width: 960px) {
    transition: 0.3s all ease-in-out;
  } */
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 8rem;
  z-index: 1;
  width: 100%;
  padding: 0 2.4rem;
  max-width: 110rem;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 2.4rem;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #bcf0fb;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2.2rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 8rem;
  padding: 0 1rem;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #bcf0fb;
    border-bottom: 3px solid #bcf0fb;
  }

  &.active {
    border-bottom: 3px solid #bcf0fb;
    color: #bcf0fb;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 18rem;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 2.4rem;
`;

export const SocialMediaIcon = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 10rem;

  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.5);
  }
`;
