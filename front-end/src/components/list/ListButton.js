import React from 'react'
import { setDirection } from '../../styles'
import IconArrow from './IconArrow'
import styled from 'styled-components'


export default ({ onClick, type }) => 

    <ListButton type={type} onClick={onClick}>
        <span>
            <IconArrow />
        </span>
    </ListButton>


const ListButton = styled.button`

    position: absolute;
    top: 0;
    bottom: 0;
    width: 55px;
    cursor: pointer;
    background: transparent;
    border: 0;
    outline: 0;
    padding: 0;
    margin: 40px 0;
    z-index: 4;

    span {
        width: 25px;
        color: #fff;
        display: block;
        margin: 0 auto;
    }

    ${props => setDirection(props.type)}
`

 