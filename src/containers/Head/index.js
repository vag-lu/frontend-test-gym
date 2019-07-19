import React, { Component } from 'react'

import './index.css'

class Head extends Component {
    render() {
        const {
            gitUser
        } = this.props

        return (
            <div id='head' className='head'>
                <p>User: <span>{gitUser}</span></p>
            </div>
        )
    }
}

export default Head