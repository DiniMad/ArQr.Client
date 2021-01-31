import React, {FunctionComponent} from 'react';
import styled from "@emotion/styled";
import {images} from "../../assets";

interface IProps {
    cardSide: "front" | "back",
}

const BusinessCard: FunctionComponent<IProps> = ({cardSide}) => {

    return (
        <ImageContainer side={cardSide}>
            <CardFrontImage src={images.CardFront} side={cardSide}/>
            <CardBackImage src={images.CardBack}/>
        </ImageContainer>
    );
};

const ImageContainer = styled.div<{ side: "front" | "back" }>`
  position: relative;
  display: grid;
  transition: all 1s;
  ${props => props.side === "back" && `transform: rotateX(180deg)`}
`;

const CardFrontImage = styled.img<{ side: "front" | "back" }>`
  grid-column: 1;
  grid-row: 1;
  display: block;
  max-width: 50rem;
  z-index: ${props => props.side === "front" ? "1" : "0"};
  transition: z-index 1s;
`;

const CardBackImage = styled.img`
  grid-column: 1;
  grid-row: 1;
  display: block;
  max-width: 50rem;
  transform: rotateX(180deg);
`;


export default BusinessCard;