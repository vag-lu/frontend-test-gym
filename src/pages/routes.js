import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Repositories from './Repositories';
import Commits from './Commits';

export default () => (
    <Switch>
        <Route path='/repositories' component={Repositories} />
        <Route path='/commits' component={Commits}/>
        <Redirect from='*' to='/repositories' />
    </Switch>
)