// App.js

import React from 'react'
import MyTimeline from './MyTimeline'

const App = () => (
    <div
        style={{ textAlign: 'center', }}
    >
        <h1>Timeline of Australian Prime Ministers</h1>
        <h3>(in reverse chronological order)</h3>
        <MyTimeline />
    </div>
)

export default App