import "./App.css"
import React, { useState } from 'react'
export default () => {
    const [state, setState] = useState(0)

    return (
        <div className="fragment-container">
            <div>Welcome to {{ CLIENT_NAME }} App</div>
            <span>{state}</span>
            <button onClick={() => setState(state + 1)}>Click me</button>
        </div>

    )
}
