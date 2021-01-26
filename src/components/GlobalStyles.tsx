import {Global, css} from '@emotion/react'
import {cssVariables,themes} from "../utils"

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
        ${cssVariables.primaryLight}: ${themes.dark.primaryLight};
      }

      a {
        text-decoration: none;
      }

      button {
        outline: none;
        border: none;
      }
    `;

    return <Global styles={style}/>
}
