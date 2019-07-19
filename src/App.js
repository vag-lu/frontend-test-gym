import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'
import Root from './pages/Root'

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Root />
            </HashRouter>
        )
    }
}

export default App