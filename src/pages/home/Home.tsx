import React from "react";
import styled from "@emotion/styled";
import LoginForm from "./LoginForm";
import {cvar} from "../../utils";
import {illustration} from "../../assets";
import {Box} from "@material-ui/core";

function Home() {
    return (
        <Container>
            <HeadImage src={illustration.Login} alt="banner"/>
            <Box my="3rem"/>
            <LoginForm/>    
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${cvar("background")};
`

const HeadImage = styled.img`
  max-width: 80%;
  max-height: 40%;
`

export default Home;