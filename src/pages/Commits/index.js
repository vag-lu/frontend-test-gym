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
            commitsToShow: [],
            allCommits: [],
            search: ""
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
                        const commits = result.data.slice(0, 20)
                        this.setState({ allCommits: commits, commitsToShow: commits })
                    }
                )
            }
        }
    }

    handleSearchChange = (event) => {
        this.setState({ search: event.target.value })
        this.doSearch()
    }

    doSearch() {
        const {
            allCommits,
            search
        } = this.state


        const filteredCommits = allCommits.filter(commit => {
            if (commit.commit.message.includes(search)) {
                return commit
            } else {
                return null
            }
        })

        this.setState({ commitsToShow: filteredCommits })

    }

    render() {
        const {
            commitsToShow,
            search
        } = this.state

        return (
            <div>
                <Search
                    handleSearchChange={this.handleSearchChange}
                    search={search} />

                <div class="timeline">
                    {this.props.location.state === undefined &&
                        <Redirect to='/repositories' />
                    }
                    {commitsToShow.map(commit => (
                        <CommitCard commit={commit} />
                    ))}

                </div>
            </div>
        )
    }
}

export default Commits