import {isKeyOf} from "./common";

const theme = {
    background: "--background",
    primaryDark: "--primary-dark",
    primary: "--primary",
    primaryLight: "--primary-light",
}

const typeScale = {
    title1: "--title1",
    title2: "--title2",
}

export const cssVariables = {
    theme,
    typeScale
}

type themeKeys = keyof typeof theme;
type typeScaleKeys = keyof typeof typeScale;
type cssVariableKeys = themeKeys | typeScaleKeys;

export function cvar(key: themeKeys): string;
export function cvar(key: typeScaleKeys): string;
export function cvar<T>(key: cssVariableKeys): string {
    if (isKeyOf(key, theme)) {
        return `var(${theme[key]})`;
    }
    if (isKeyOf(key, typeScale)) {
        return `var(${typeScale[key]})`;
    }
    throw new Error("Invalid key");
}