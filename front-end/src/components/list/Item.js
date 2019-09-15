import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { setRem } from '../../styles'

export default ({ code, children, refProps }) =>

    <Item
        to={`/countries/${code}`} 
        style={{ color: 'black' }}  
    >
        <ItemInner ref={refProps}>
            {children}
        </ItemInner>
    </Item>


const ItemInner = styled.div`
    padding: 10px;

    p {
        font-size: ${setRem(17)};
    }
`

export const Item = styled(Link)`
    background-color: rgba(0,0,0,0.8); 
    border-radius: 4px;
    z-index: 4;
    flex: 0 0 13%;
    text-align: center;
    margin: 0 2px;
    transition: transform 300ms ease 100ms;
    text-decoration: none;
`