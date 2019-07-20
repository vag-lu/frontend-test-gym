import React, { Component } from 'react'
import UserModal from '../../containers/UserModal'
import { getRepositories } from '../../services/github/github-api'
import Head from '../../containers/Head'
import RepositoryCard from '../../containers/RepositoryCard'


import './index.css'

class Repositories extends Component {
  constructor() {
    super()

    this.state = {
      showModal: true,
      gitUser: "",
      repositories: []
    }
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  handleGitUserChange = (e) => {
    this.setState({ gitUser: e.target.value })
  }

  onGoClick = () => {
    const {
      gitUser
    } = this.state

    if (gitUser !== '') {
      getRepositories(gitUser).then(
        result => {
          this.setState({ repositories: result.data })
        }
      )
    }

    this.handleCloseModal()
  }

  render() {
    const {
      showModal,
      gitUser,
      repositories
    } = this.state

    return (
      <div className="app" >
        <div className='container'>
          <Head
            gitUser={gitUser} />

          {repositories.map(repository => (
            <RepositoryCard
              repository={repository}
              gitUser={gitUser}/>
          ))}

          {repositories.length === 0 &&
            <h3>No repositories found</h3>
          }

          <UserModal
            showModal={showModal}
            gitUser={gitUser}
            onGoClick={this.onGoClick}
            handleGitUserChange={this.handleGitUserChange} />
        </div>
      </div>
    )
  }
}

export default Repositories;
