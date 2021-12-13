import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ primary }) => (primary ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding-top: 5rem;
    padding-bottom: ${({ small }) => (small ? "15rem" : "10rem")};
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: ${({ short }) => (short ? "45rem" : "66rem")};
  margin-top: ${({ short }) => (short ? "5rem" : 0)};
  width: 100%;
  max-width: 110rem;
  margin-right: auto;
  margin-left: auto;
  padding: 0 2.4rem;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: ${({ short }) => (short ? "55rem" : "66rem")};
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr;
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    grid-gap: 0;
  }
`;

export const Column1 = styled.div`
  /* margin-bottom: 1.5rem; */
  padding: 0 1.5rem;
  grid-area: col1;
`;

export const Column2 = styled.div`
  /* margin-bottom: 1.5rem; */
  padding: 0 1.5rem;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 54rem;
  padding-top: 6rem;
  padding-bottom: 6rem;

  @media screen and (max-width: 768px) {
    padding-top: 2rem;
    padding-bottom: 0rem;
  }
`;

export const TopLine = styled.p`
  color: ${({ primary }) => (primary ? "#66bcd7" : "#f5dcff")};
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.14rem;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
`;

export const Heading = styled.h1`
  margin-bottom: 2.4rem;
  font-size: 4.8rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ primary }) => (primary ? "#010606" : "#f7f8fa")};

  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 3.2rem;
  }
`;

export const Paragraph = styled.span`
  max-width: 44rem;
  margin-bottom: 3.5rem;
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: ${({ primary }) => (primary ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    margin-top: 2.5rem;
    justify-content: center;
  }
`;

export const ImgWrap = styled.div`
  max-width: 55.5rem;
  height: 100%;

  img {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
`;

export const Img = styled.img`
  width: ${({ small }) => (small ? "80%" : "100%")};
  border-radius: ${({ small }) => (small ? "5rem" : "0rem")};
  color: black;
  border-width: 0.7rem;
  border-style: solid;
  margin: 0 0 1rem 0;
  padding-right: 0;

  @media screen and (max-width: 768px) {
    max-height: ${({ small }) => (small ? "30rem" : "33rem")};
    max-width: ${({ small }) => (small ? "30rem" : "33rem")};
    margin-top: ${({ noButton }) => (noButton ? "0rem" : "3rem")};
  }

  @media screen and (max-width: 350px) {
    max-height: ${({ small }) => (small ? "20rem" : "25rem")};
    max-width: ${({ small }) => (small ? "20rem" : "25rem")};
  }
`;
