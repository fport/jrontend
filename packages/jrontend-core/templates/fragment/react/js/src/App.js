import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'

const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
})

export default ({ history, onSignIn }) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route path="/">
                            <div>auth </div>
                        </Route>
                        <Route path="/auth/signin">
                            <div>auth / signin </div>
                        </Route>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}
