import React from "react";
import {
  GridContainer,
  GridWrapper,
  GridImg,
  GridElement,
} from "./GridElements";

const Grid = (p) => {
  return (
    <GridContainer id={p.id} primary={p.false}>
      <GridWrapper>
        <GridElement>
          <GridImg className={"image_bounce"} src={p.img_1} />
        </GridElement>
        <GridElement>
          <GridImg className={"image_bounce"} src={p.img_2} />
        </GridElement>
        <GridElement>
          <GridImg className={"image_bounce"} src={p.img_3} />
        </GridElement>
        <GridElement>
          <GridImg className={"image_bounce"} src={p.img_4} />
        </GridElement>

        <GridElement>
          <GridImg className={"image_bounce"} src={p.img_5} />
        </GridElement>
        <GridElement>
          <GridImg className={"image_bounce"} src={p.img_6} />
        </GridElement>
        <GridElement>
          <GridImg className={"image_bounce"} src={p.img_7} />
        </GridElement>
        <GridElement>
          <GridImg className={"image_bounce"} src={p.img_8} />
        </GridElement>
      </GridWrapper>
    </GridContainer>
  );
};

export default Grid;
