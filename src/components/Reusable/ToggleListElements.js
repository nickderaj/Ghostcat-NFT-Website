import styled from "styled-components";

export const ListContainer = styled.div`
  color: #fff;
  background: ${({ primary }) => (primary ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 10rem 0;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 66rem;
  width: 100%;
  max-width: 110rem;
  margin-right: auto;
  margin-left: auto;
  padding: 0 2.4rem;
  justify-content: center;
  align-items: center;
`;

export const ListRow = styled.div`
  width: 100%;
  display: block;
  align-items: center;
  padding-top: 6rem;
  padding-bottom: 6rem;

  @media screen and (max-width: 768px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
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

  @media screen and (max-width: 480px) {
    font-size: 3.2rem;
  }
`;

export const Button = styled.button`
  border-radius: 1rem;
  background: #bcf0fb;
  white-space: nowrap;
  padding: 0rem 3rem;
  color: #010606;
  font-size: 1.8rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 90%;
  margin-bottom: 1rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #e8fbff;
  }

  &.active {
    transition: all 0.2s ease-in-out;
    background: #e8fbff;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const ButtonText = styled.div`
  margin: 1rem 0rem;
  display: flex;
  justify-content: space-between;
`;

export const Paragraph = styled.span`
  font-size: 1.8rem;
  line-height: 2.4rem;
  display: block;
  max-height: 0;
  overflow: hidden;
  color: ${({ primary }) => (primary ? "#010606" : "#fff")};
  transition: all 0.3s cubic-bezier(0, 1, 0, 1);

  &.active {
    height: auto;
    max-height: 100rem;
    transition: all 0.3s cubic-bezier(1, 0, 1, 0);
  }

  @media screen and (max-width: 480px) {
    font-size: 1.6rem;
  }
`;
