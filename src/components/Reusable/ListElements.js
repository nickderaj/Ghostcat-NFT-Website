import styled from "styled-components";

export const TextContainer = styled.div`
  color: #fff;
  background: ${({ primary }) => (primary ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 10rem 0;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  z-index: 1;
  min-height: 66rem;
  width: 100%;
  max-width: 110rem;
  margin-right: auto;
  margin-left: auto;
  padding: 0 2.4rem;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    min-height: 80rem;
  }
`;

export const TextRow = styled.div`
  width: 100%;
  display: grid;
  grid-auto-columns: ${({ imgStart }) => (imgStart ? `1fr 2fr` : `2fr 1fr`)};
  align-items: center;
  padding-top: 6rem;
  padding-bottom: 6rem;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    grid-gap: 0;
  }

  @media screen and (max-width: 880px) {
    grid-auto-columns: ${({ imgStart }) =>
      imgStart ? `1fr 1.5fr` : `1.5fr 1fr`};
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
  margin-bottom: 2.6rem;
  font-size: 4.8rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ primary }) => (primary ? "#010606" : "#f7f8fa")};

  @media screen and (max-width: 480px) {
    font-size: 3.2rem;
  }
`;

export const ListWrapper = styled.span`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 9fr;
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: ${({ primary }) => (primary ? "#010606" : "#fff")};
`;

export const ListKeys = styled.div`
  color: ${({ primary }) => (primary ? "#bcf0fb" : "#f5dcff")};
  font-weight: 700;
`;

export const ImgWrap = styled.div`
  max-height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 5rem;
  color: black;
  border-width: 0.7rem;
  border-style: solid;
  margin-left: auto;
  margin-right: auto;
  display: block;

  @media screen and (max-width: 768px) {
    margin-top: 5rem;
    max-height: 33rem;
    max-width: 33rem;
  }

  @media screen and (max-width: 350px) {
    max-height: 25rem;
    max-width: 25rem;
  }
`;
