import {Global, css} from '@emotion/react'

function GlobalStyles() {
    const style = css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html, body {
        font-size: 10px;
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

export default GlobalStyles;