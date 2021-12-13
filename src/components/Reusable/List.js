import React from "react";
import {
  TextContainer,
  TextWrapper,
  TextRow,
  TopLine,
  Heading,
  ListWrapper,
  ListKeys,
  Column1,
  Column2,
  ImgWrap,
  Img,
} from "./ListElements";

const Text = (p) => {
  return (
    <TextContainer primary={p.primary} id={p.id}>
      <TextWrapper>
        <TextRow alignLeft={p.alignLeft} imgStart={p.imgStart}>
          <Column1>
            <TopLine primary={p.primary}>{p.topLine}</TopLine>
            <Heading primary={p.primary}>{p.heading}</Heading>
            {p.list.map((text) => (
              <ListWrapper key={text.title} primary={p.primary}>
                <ListKeys>{text.title}</ListKeys> {text.description}
              </ListWrapper>
            ))}
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={p.img} alt={p.alt} small={p.imgSmall} />
            </ImgWrap>
          </Column2>
        </TextRow>
      </TextWrapper>
    </TextContainer>
  );
};

export default Text;
