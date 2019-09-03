import React from 'react'
import GlobalStyle from '../styles/global'
import styled from 'styled-components'
import img from '../images/background.svg'
import { setBackground } from '../styles'

export default ({ children }) => 

    <LayoutWrapper img={img}>
        <GlobalStyle />
        <main> {children} </main>
    </LayoutWrapper>
 
const LayoutWrapper = styled.div`
    ${props => setBackground({ img: props.img })};
`
