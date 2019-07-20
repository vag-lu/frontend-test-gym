import React, { Component } from 'react'
import { format } from 'date-fns';

import './index.css'

class CommitCard extends Component {
    render() {
        const {
            commit
        } = this.props

        return (
            <div class="commit-container right">
                <div class="content">
                    <p>{format(commit.commit.committer.date,
                        "HH:mm:ss DD-MMM-YYYY")} "{commit.commit.message}"</p>
                </div>
            </div>
        )
    }
}

export default CommitCard