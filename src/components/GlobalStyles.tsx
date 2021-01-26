import {Global, css} from '@emotion/react'
import {cssVariables, themes} from "../utils"

export function GlobalStyles() {
    const style = css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html, body {
        font-size: 10px;
        ${cssVariables.background}: ${themes.dark.background};
        ${cssVariables.primaryDark}: ${themes.dark.primaryDark};
        ${cssVariables.primary}: ${themes.dark.primary};
        ${cssVariables.primaryLight}: ${themes.dark.primaryLight};
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
