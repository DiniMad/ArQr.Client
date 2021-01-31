import React, {useState} from 'react';
import styled from "@emotion/styled";
import {cvar} from "../../utils";
import {illustration} from "../../assets";
import QrCodePreview from "./QrCodePreview.Mobile";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Home = () => {
    const [contentState, setContentState] = useState<"lens" | "login" | "register">("lens")

    const setLoginContent = () => setContentState("login");
    const setRegisterContent = () => setContentState("register");

    return (
        <Container>
            <Banner> <img src={illustration.Login} alt="banner"/> </Banner>
            <Content>
                {contentState === "lens" && <QrCodePreview changeContent={setLoginContent}/>}
                {contentState === "login" && <LoginForm changeContent={setRegisterContent}/>}
                {contentState === "register" && <RegisterForm changeContent={setLoginContent}/>}
            </Content>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: ${cvar("background")};
`

const Banner = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  img {
    max-width: 85%;
  }
`;

const Content = styled.section`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Home;