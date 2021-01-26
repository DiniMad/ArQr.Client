export const cssVariables = {
    background: "--background",
    primaryLight: "--primary-light",
}

export function cvar(key: keyof typeof cssVariables) {
    return `var(${cssVariables[key]})`
}
