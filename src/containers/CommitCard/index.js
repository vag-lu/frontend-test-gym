import React, { Component } from 'react'

import './index.css'

class CommitCard extends Component {
    render() {
        const {
            commit
        } = this.props
        
        return (
            <div class="commit-container right">
                <div class="content">
                    <p>{commit.commit.committer.date.replace(/T|Z/g, " ")} "{commit.commit.message}"</p>
                </div>
            </div>
        )
    }
}

export default CommitCard