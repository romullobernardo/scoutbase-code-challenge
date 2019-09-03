import { createGlobalStyle } from 'styled-components'
import { setColor, setFont } from '../index'

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Courgette|Lato:400,700&display=swap');


    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 100%;
        color: ${setColor.mainBlack};
        background: ${setColor.mainWhite};
        ${setFont.main};
    }

    h1 {
        font-size: 2em;
        line-height: 1.2;
        margin-bottom: 0.5em;
        text-align: center;
        color: ${setColor.contrast};
        ${setFont.slanted};
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }

    p {
        line-height: 1.5;
        margin:0 0 1.5 0;
        color: ${setColor.mainWhite};
    }
`