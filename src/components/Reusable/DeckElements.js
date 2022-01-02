import styled from "styled-components";

export const DeckContainer = styled.div`
  padding-top: 4rem;
  padding-bottom: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ primary }) => (primary ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    max-height: 90rem;
  }

  @media screen and (max-width: 480px) {
    max-height: 110rem;
  }
`;

export const DeckTopline = styled.p`
  color: ${({ primary }) => (primary ? "#66bcd7" : "#f5dcff")};
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.14rem;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
`;

export const DeckWrapper = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 1.6rem;
  padding: 0 5rem;

  @media screen and (max-width: 780px) {
    grid-gap: 0rem;
    padding: 0;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 2rem;
    grid-gap: 3rem;
  }
`;

export const DeckCard = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 1rem;
  max-height: 34rem;
  padding: 3rem;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); */
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const DeckIcon = styled.img`
  border-radius: 5rem;
  border-style: solid;
  max-height: 28rem;
  max-width: 28rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 780px) {
    max-height: 24rem;
    max-width: 24rem;
  }

  @media screen and (max-width: 600px) {
    max-height: 18rem;
    max-width: 18rem;
  }

  @media screen and (max-width: 480px) {
    max-height: 26rem;
    max-width: 26rem;
  }
`;

export const DeckHeading = styled.h1`
  margin-bottom: 2.4rem;
  font-size: 4.8rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ primary }) => (primary ? "#010606" : "#f7f8fa")};

  @media screen and (max-width: 480px) {
    font-size: 3.2rem;
  }
`;

export const DeckIconSubheading = styled.h2`
  color: ${({ primary }) => (primary ? "#010606" : "#f7f8fa")};
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const DeckPWrapper = styled.div`
  max-height: 28rem;
  max-width: 28rem;

  @media screen and (max-width: 780px) {
    max-width: 24rem;
  }

  @media screen and (max-width: 600px) {
    max-width: 18rem;
  }

  @media screen and (max-width: 480px) {
    max-width: 26rem;
  }
`;

export const DeckP = styled.p`
  color: ${({ primary }) => (primary ? "#010606" : "#f7f8fa")};
  font-size: 2rem;
  text-align: center;
`;

export const DeckSubheading = styled.p`
  color: ${({ primary }) => (primary ? "#010606" : "#f7f8fa")};
  font-size: 2rem;
  text-align: center;
  padding: 0 5rem;
`;
