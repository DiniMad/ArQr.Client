export const cssVariables = {
    background: "--background",
    primaryDark: "--primary-dark",
    primary: "--primary",
    primaryLight: "--primary-light",
}

export function cvar(key: keyof typeof cssVariables) {
    return `var(${cssVariables[key]})`
}
