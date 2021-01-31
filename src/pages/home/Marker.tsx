import React, {FunctionComponent} from 'react';
import styled from "@emotion/styled";
import {cvar} from "../../utils";
import {images} from "../../assets";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import {keyframes} from "@emotion/react";

interface IProps {
    cardSide:"front" | "back",
    changeContent:()=>void
}

const Marker:FunctionComponent<IProps> = ({cardSide,changeContent}) => {
    return (
        <Container side={cardSide}>
            <Content>
                <PhoneImage src={images.Phone}/>
                {cardSide === "front" && <FormSection> <LoginForm changeContent={changeContent}/></FormSection>}
                {cardSide === "back" && <FormSection> <RegisterForm changeContent={changeContent}/></FormSection>}
            </Content>
        </Container>
    );
};

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Container = styled.div<{ side: "front" | "back" }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: ${props => props.side === "front" ? "2.2rem" : "0.5rem;"};
  left: ${props => props.side === "front" ? "2.2rem" : "41.4rem"};
  width: 8rem;
  height: 8rem;
  z-index: 2;
  transition: all 1s;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const PhoneImage = styled.img`
  display: block;
  position: absolute;
`;

const FormSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  border-radius: 1rem;
  padding: 2rem;
  width: 22rem;
  height: 38rem;
  z-index: 1;
  background: ${cvar("backgroundDark")};
  animation: ${fadeInAnimation} 1s forwards 1s;
`;

export default Marker;