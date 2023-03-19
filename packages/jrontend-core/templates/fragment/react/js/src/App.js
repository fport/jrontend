import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'

export default ({ history }) => {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route path="/">
                        <div>{{ CLIENT_NAME }} </div>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
