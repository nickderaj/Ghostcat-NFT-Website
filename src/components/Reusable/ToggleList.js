import React, { useEffect } from "react";
import {
  ListContainer,
  ListWrapper,
  ListRow,
  TopLine,
  Heading,
  Paragraph,
  Button,
  ButtonText,
} from "./ToggleListElements";

const ToggleList = (p) => {
  const hideAllParagraphs = () => {
    const paragraphs = document.querySelectorAll(".paragraph");
    const buttons = document.querySelectorAll(".paragraphButton");
    [...paragraphs, ...buttons].forEach((btn) =>
      btn.classList.remove("active")
    );
  };

  const openParagraph = (index) => {
    const paragraph = document.getElementById(`paragraph-${index}`);
    const button = document.getElementById(`paragraphButton-${index}`);
    hideAllParagraphs();
    [paragraph, button].forEach((el) => el.classList.add("active"));
  };

  useEffect(() => {
    hideAllParagraphs();
  }, []);

  return (
    <ListContainer primary={p.primary} id={p.id}>
      <ListWrapper>
        <ListRow alignLeft={p.alignLeft}>
          <TopLine primary={p.primary}>{p.topLine}</TopLine>
          <Heading primary={p.primary}>{p.heading}</Heading>
          {p.dropdowns.map((el, i) => {
            return (
              <div key={`paragraph-${i}`}>
                <Button
                  id={`paragraphButton-${i}`}
                  className={"paragraphButton"}
                  primary={p.primary}
                  onClick={() => {
                    openParagraph(i);
                  }}
                >
                  <ButtonText>{el.title}</ButtonText>
                </Button>
                <Paragraph
                  className={"paragraph"}
                  id={`paragraph-${i}`}
                  primary={p.primary}
                >
                  <div
                    style={{
                      marginLeft: "1rem",
                      width: "90%",
                    }}
                  >
                    {el.description}
                  </div>
                </Paragraph>
              </div>
            );
          })}
        </ListRow>
      </ListWrapper>
    </ListContainer>
  );
};

export default ToggleList;
