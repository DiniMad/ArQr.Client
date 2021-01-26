import {Global, css} from '@emotion/react'
import {cssVariables, primaryFont, themes, typeScale} from "../utils"

export function GlobalStyles() {
    const style = css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html, body {
        font-size: 10px;
        font-family: ${primaryFont};
        ${cssVariables.theme.background}: ${themes.dark.background};
        ${cssVariables.theme.primaryDark}: ${themes.dark.primaryDark};
        ${cssVariables.theme.primary}: ${themes.dark.primary};
        ${cssVariables.theme.primaryLight}: ${themes.dark.primaryLight};
        ${cssVariables.typeScale.title1}: ${typeScale.title1};
        ${cssVariables.typeScale.title2}: ${typeScale.title2};
      }

      a {
        text-decoration: none;
      }

      button {
        outline: none;
        border: none;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      input[type=number] {
        -moz-appearance: textfield;
      }
    `;

    return <Global styles={style}/>
}
