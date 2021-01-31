import React, {useState} from "react";
import BusinessCard from "./BusinessCard";
import styled from "@emotion/styled";
import {cvar} from "../../utils";
import Marker from "./Marker";

const Home = () => {
    const [cardSide, setCardSide] = useState<"front" | "back">("front")

    const turnCard = () => {
        setCardSide(prevState => prevState === "front" ? "back" : "front")
    }
    
    return (
        <Container>
            <Content>
                <BusinessCard cardSide={cardSide}/>
                <Marker cardSide={cardSide} changeContent={turnCard}/>
            </Content>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: ${cvar("background")};
`

const Content = styled.div`
  position: relative;
`;

export default Home;