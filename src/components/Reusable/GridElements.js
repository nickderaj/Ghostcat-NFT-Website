import styled from "styled-components";

export const GridContainer = styled.div`
  color: #fff;
  background: ${({ primary }) => (primary ? "#f9f9f9" : "#010606")};
  align-items: center;
  padding: 2rem 0;
  position: relative;
`;

export const GridWrapper = styled.div`
  margin: auto auto;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 1.6rem;
  grid-gap: 1.6rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const GridElement = styled.figure`
  overflow: hidden;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 768px) {
    &:nth-child(n + 5) {
      display: none;
    }
  }
`;

export const GridImg = styled.img`
  transform: scale(0.95);
  display: block;
  width: 100%;
  transition: all 0.4s;
  text-align: center;
  border-radius: 3rem;
`;
