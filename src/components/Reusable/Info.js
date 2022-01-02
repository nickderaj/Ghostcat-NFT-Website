import React from "react";
import { ButtonR } from "../Button/ButtonElements";
import { ButtonS } from "../Button/ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Paragraph,
  BtnWrap,
  Img,
  ImgWrap,
} from "./InfoElements";

const Info = (p) => {
  const buttonFormat = () => {
    if (p.buttonLink.includes("/")) {
      return (
        <ButtonR
          to={p.btnDisabled ? "#" : p.buttonLink}
          primary={p.primary ? 1 : 0}
          hidden={p.noButton ? 1 : 0}
          onClick={p.onClick}
        >
          {p.buttonLabel}
        </ButtonR>
      );
    }
    return (
      <ButtonS
        to={p.btnDisabled ? "#" : p.buttonLink}
        smooth={true}
        duration={100}
        spy={true}
        exact="true"
        offet={-80}
        primary={p.primary ? 1 : 0}
        hidden={p.noButton ? 1 : 0}
        onClick={p.onClick}
      >
        {p.buttonLabel}
      </ButtonS>
    );
  };

  return (
    <InfoContainer
      primary={p.primary}
      id={p.id}
      small={p.imgSmall}
      hero={p.hero}
    >
      <InfoWrapper short={p.short}>
        <InfoRow imgStart={p.imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine primary={p.primary}>{p.topLine}</TopLine>
              <Heading primary={p.primary}>{p.heading}</Heading>
              <Paragraph primary={p.primary}>{p.description}</Paragraph>
              <BtnWrap>{buttonFormat()}</BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img
                noButton={p.noButton}
                src={p.img}
                alt={p.alt}
                small={p.imgSmall}
                imgBorder={p.imgBorder}
              />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default Info;
