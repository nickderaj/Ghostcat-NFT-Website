import React from "react";
import {
  DeckContainer,
  DeckTopline,
  DeckHeading,
  DeckWrapper,
  DeckCard,
  DeckIcon,
  DeckSubheading,
  DeckP,
  DeckPWrapper,
  DeckIconSubheading,
} from "./DeckElements";

const Deck = (p) => {
  return (
    <DeckContainer primary={p.primary} id={p.id}>
      <DeckTopline primary={p.primary}>{p.topLine}</DeckTopline>
      <DeckHeading primary={p.primary}>{p.heading}</DeckHeading>
      <DeckSubheading primary={p.primary}>{p.subheading}</DeckSubheading>
      <DeckWrapper>
        <DeckCard>
          <DeckIcon src={p.img_1} alt={p.alt_1} />
          <DeckIconSubheading primary={p.primary}>
            {p.title_1}
          </DeckIconSubheading>
          <DeckPWrapper>
            <DeckP primary={p.primary}>{p.text_1}</DeckP>
          </DeckPWrapper>
        </DeckCard>
        <DeckCard>
          <DeckIcon src={p.img_2} alt={p.alt_2} />
          <DeckIconSubheading primary={p.primary}>
            {p.title_2}
          </DeckIconSubheading>
          <DeckPWrapper>
            <DeckP primary={p.primary}>{p.text_2}</DeckP>
          </DeckPWrapper>
        </DeckCard>
      </DeckWrapper>
    </DeckContainer>
  );
};

export default Deck;
