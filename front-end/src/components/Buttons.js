import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { setColor, setRem, setFont, setBorder, setTransition } from '../styles'

export default styled(Link)`

    margin-top: ${setRem(20)};
    display: inline-block;
    background: ${setColor.primaryColor};   
    color: ${setColor.mainWhite};
    text-transform: capitalize;
    font-size: ${setRem(18)};
    ${setFont.main};
    padding: ${setRem(17)} ${setRem(36)};
    ${setBorder({ color: setColor.primaryColor })};

    ${setTransition()};
    &:hover {
        background: transparent;
        color: ${setColor.primaryColor};
    }
    text-decoration: none;
    cursor: pointer;
`