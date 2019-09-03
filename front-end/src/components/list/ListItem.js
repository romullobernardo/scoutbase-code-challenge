import React from 'react'
import { setColor, setRem } from '../../styles'
import { Link } from 'react-router-dom'
import Context from './context'
import styled from 'styled-components'


export default ({ country: { name, languages, code } }) =>

    <Context.Consumer>

        { ({ elementRef }) => 
        
            <Link 
                to={`/countries/${code}`} 
                style={{ color: 'black' }}  
                className='item'     
            > 
                <Item ref={elementRef}>
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
            </Link>

        }

    </Context.Consumer>


const Item = styled.div`

    padding: 10px;

    p {
        font-size: ${setRem(17)};
    }
`

const Languages = styled.div`
    margin-top: 20px;

    p {
        color: ${setColor.primaryColor};
        font-size: ${setRem(12)};
    }
`