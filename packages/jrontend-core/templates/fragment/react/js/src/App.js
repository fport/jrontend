import React from 'react'
export default () => {
    return (
        <div>{{ CLIENT_NAME }} </div>
    )
}

import React, { useState } from 'react'
export default () => {
    const [state, setState] = useState(0)
    return (
        <div>
            <div>Welcome to {{ CLIENT_NAME }} App</div>
            <span>{state}</span>
            <button onClick={() => setState(state + 1)}>Click me</button>
        </div>

    )
}
