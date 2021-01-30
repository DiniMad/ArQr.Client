import React, {FunctionComponent} from 'react';
import styled from "@emotion/styled";
import {svg} from "../../assets"
import {keyframes} from "@emotion/react";
import QRCode from "qrcode.react"
import {cvar, themes} from "../../utils"

interface IProps {
    changeContent: () => void
}

const LensBackground: FunctionComponent<IProps> = ({changeContent}) => {
    const animationDuration = (containerDelay + containerDuration) * 1000;
    setTimeout(() => changeContent(), animationDuration)

    return (
        <Container>
            <LensImage src={svg.Lens}/>
            <QrCode value="ArQr" bgColor={themes.dark.background} fgColor="white" size={150}/>
        </Container>
    );
}

const fadeInKeyframe = keyframes`
  to {
    opacity: 1;
  }
`
const fadeOutKeyframe = keyframes`
  to {
    opacity: 0;
    z-index: 0;
  }
`
const flashKeyframe = keyframes`
  0%, 33%, 66%, 100% {
    opacity: 1;
  }
  16%, 49%, 82% {
    opacity: 0;
  }
`;

const qrCodeDelay = .5;
const qrCodeDuration = 1;
const lensDelay = qrCodeDelay + qrCodeDuration;
const lensDuration = 1;
const containerDelay = lensDelay + lensDuration;
const containerDuration = 1;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  opacity: 1;
  width: 30rem;
  height: 30rem;
  background: ${cvar("background")};
  animation: ${fadeOutKeyframe} ${containerDuration}s forwards ${containerDelay}s;
`

const QrCode = styled(QRCode)`
  opacity: 0;
  animation: ${fadeInKeyframe} ${qrCodeDuration}s forwards ${qrCodeDelay}s;
`;

const LensImage = styled.img`
  position: absolute;
  color: white;
  max-width: 90%;
  max-height: 90%;
  animation: ${flashKeyframe} ${lensDuration}s both ${lensDelay}s;
`;

export default LensBackground;