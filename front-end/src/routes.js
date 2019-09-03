import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Countries from './pages/Countries'
import CountryDetail from './pages/CountryDetail'

export default () =>

    <Router>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/countries' exact component={Countries} />
            <Route path='/countries/:code' component={CountryDetail} />
        </Switch>
    </Router>