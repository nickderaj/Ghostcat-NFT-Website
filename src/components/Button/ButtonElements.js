import styled from "styled-components";
// import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const ButtonS = styled(LinkS)`
  border-radius: 5rem;
  background: ${({ primary }) => (primary ? "#bcf0fb" : "#f5dcff")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "1.4rem 4.8rem" : "1.2rem 3rem")};
  color: #010606;
  font-size: ${({ big }) => (big ? "2rem" : "1.8rem")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#f5dcff" : "#bcf0fb")};
    color: #010606;
  }
`;

export const ButtonR = styled(LinkR)`
  border-radius: 5rem;
  background: ${({ primary }) => (primary ? "#bcf0fb" : "#f5dcff")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "1.4rem 4.8rem" : "1.2rem 3rem")};
  color: #010606;
  font-size: ${({ big }) => (big ? "2rem" : "1.8rem")};
  outline: none;
  border: none;
  cursor: pointer;
  display: ${({ hidden }) => (hidden ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#f5dcff" : "#bcf0fb")};
    color: #010606;
  }
`;
