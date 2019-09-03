import React from 'react'
import Layout from '../templates/layout'
import { gql } from "apollo-boost"
import { useQuery } from '@apollo/react-hooks'
import List from '../components/list'

const continents = ['Africa', 'Antarctica', 'Asia', 'Europe', 'North America', 'Oceania', 'South America']

export default () =>
{
    const { loading, error, data } = useQuery(gql`
        {   
            countries {
                name
                languages {
                    native
                    name
                }
                continent {
                    name
                }
                code
            }
        }
    `)

    if (loading) return <p> Loading... </p>
    if (error) return <p> Error :( </p>

    return (
        <Layout>
            {continents.map(continent => 
                <div key={continent}>
                    <h1> {continent} </h1>
                    <List 
                        continent={continent}
                        data={data}
                    />
                </div>
            )}
        </Layout>
    )
}
