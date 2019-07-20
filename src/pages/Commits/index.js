import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import CommitCard from '../../containers/CommitCard'
import { getCommits } from '../../services/github/github-api'

import './index.css'
import Search from '../../containers/Search';

class Commits extends Component {
    constructor() {
        super()

        this.state = {
            commits: []
        }
    }

    componentDidMount() {
        if (this.props.location.state !== undefined) {
            const {
                repositoryName,
                gitUser
            } = this.props.location.state

            if (repositoryName !== null || gitUser !== null) {
                getCommits(gitUser, repositoryName).then(
                    result => {
                        this.setState({ commits: result.data.slice(0, 20) })
                    }
                )
            }
        }
    }

    render() {
        const {
            commits
        } = this.state

        return (
            <div>
                <Search/>
                <div class="timeline">
                    {this.props.location.state === undefined &&
                        <Redirect to='/repositories' />
                    }
                    {commits.map(commit => (
                        <CommitCard commit={commit} />
                    ))}

                </div>
            </div>
        )
    }
}

export default Commits