import React from 'react'
import { setFlex } from '../styles'
import styled from 'styled-components'
import Box from '../components/Box'
import Button from '../components/Buttons'


export default () =>

    <HomeWrapper className='container center'>
        <Box>
            <h1> Country Selector </h1>
            <Button to='/countries'> go </Button>
        </Box>
    </HomeWrapper>


const HomeWrapper = styled.div`
    height: 100vh;
    height: 100vh;
    ${setFlex()};
`