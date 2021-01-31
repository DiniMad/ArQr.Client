import {FunctionComponent} from "react";

export const mediaQueries = {
    mobileMaxWidth: 480
}

export const sizeBasedComponent = (desktopSizeComponent: FunctionComponent, mobileSizeComponent: FunctionComponent) => {
    const width = window.innerWidth;
    const isDesktopSize = width > mediaQueries.mobileMaxWidth;
    return  isDesktopSize ? desktopSizeComponent : mobileSizeComponent;
}