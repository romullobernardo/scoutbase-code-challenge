import styled from 'styled-components'
import { setRem, setColor } from '../styles'

export default styled.div`
    min-width: 1000px;
    background: rgba(0,0,0,0.8);
    text-align:center;
    padding: ${setRem(60)} ${setRem(32)};
    color: ${setColor.primaryColor};
    border-radius: ${setRem(4)};
`