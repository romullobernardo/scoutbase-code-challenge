import React from 'react'
import styled from 'styled-components'
import { setRem, setColor, setFlex } from '../styles'
import Layout from '../templates/layout'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import img from '../images/background.svg'
import Box from '../components/Box'
import Button from '../components/Buttons'

const COUNTRY_QUERY = gql`
    query CountryQuery($code: String!){
        country(code: $code) {
            name
            currency
            phone
            languages {
                code
                name
            }
        }
    }
`

export default ({ match }) =>
{
    const { code } = match.params
    const { loading, error, data } = useQuery(COUNTRY_QUERY, { variables: { code } })

    if (loading) return <p>Loading ...</p>
    if (error) return <p> Error :( </p>

    const { name, currency, phone, languages } = data.country

    return (
        <Layout>
            <DetailWrapper img={img}>
                <Box>
                    <ContentWrapper>
                        <h1> {name} </h1>
                        <h2> <span> Currency: </span> {currency} </h2>
                        <h2> <span> Area code: </span> {phone} </h2>

                        <h3> Languages </h3>
                        {languages.map(language => 
                            <Language key={language.code}>
                                <p> {language.name} <span> {language.code} </span> </p>
                            </Language>
                        )}
                        <Button to='/countries'> back </Button>
                    </ContentWrapper>
                </Box>
            </DetailWrapper>
        </Layout>
    )
}

const DetailWrapper = styled.div`
    height: 100vh;
    ${setFlex()};
`

const ContentWrapper = styled.div`
   

    h3 {
        margin-bottom: ${setRem(12)};
        margin-top: ${setRem(40)};
        color: ${setColor.mainWhite};
    }

    h2 {
        font-size: ${setRem(38)};
        color: ${setColor.mainWhite};

        span {
            color: ${setColor.primaryColor};
        }
    }

    h1 {
        color: ${setColor.contrast};
        font-size: ${setRem(48)};
    }
`

const Language = styled.div`
    p {
        color: ${setColor.primaryColor};
        span {
            color: ${setColor.mainWhite};
        }
    }
`