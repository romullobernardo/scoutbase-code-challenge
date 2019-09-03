import List from './List'
import ListItem from './ListItem'
import React from 'react'

export default ({ continent, data }) => 

    <List>
        {data.countries.filter(c => c.continent.name === continent).map(country => 
            <ListItem 
                key={country.code}
                name={country.name}
                country={country}
            />
        )}
    </List>

 
