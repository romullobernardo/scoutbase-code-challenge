import React from 'react'
import { setColor, setRem } from '../../styles'
import Context from './context'
import styled from 'styled-components'

import Item from './Item'


export default ({ country: { name, languages, code } }) =>

    <Context.Consumer>

        { ({ elementRef }) => 
        
            <Item 
                refProps={elementRef}
                code={code}
            >
                <img 
                    src={`https://www.countryflags.io/${code.toLowerCase()}/shiny/64.png`} 
                    alt={code}
                /> 
                <p> {name} </p>

                {languages.slice(0, 1).map(language => 
                    <Languages key={language.name}>
                        <p> {language.name} </p>
                        <p> {language.native} </p>
                    </Languages>
                )}

            </Item>

        }

    </Context.Consumer>


const Languages = styled.div`
    margin-top: 20px;

    p {
        color: ${setColor.primaryColor};
        font-size: ${setRem(12)};
    }
`