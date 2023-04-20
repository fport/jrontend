/*import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
    return ReactDOM.render(<App />, el)
}

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_{{CLIENT_NAME}}-dev-root')

    if (devRoot) {
        mount(devRoot)
    }
}

// We are running through container
// and we should export the mount function
export { mount }*/


import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';
const container = document.querySelector('#_{{CLIENT_NAME}}-dev-root')
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);