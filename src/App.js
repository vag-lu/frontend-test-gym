import React, { Component } from 'react'
import Card from './components/Card'
import UserModal from './containers/UserModal'

import './App.css'
import { getRepositories } from './services/github/github-api';

class App extends Component {
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
    getRepositories(this.state.gitUser).then(
      result => {
        this.setState({ repositories: result.data })
      }
    )    
    this.handleCloseModal()
  }

  render() {
    const {
      showModal,
      gitUser,
      repositories
    } = this.state

    return (
      <div className="App" >

        {repositories.map(repo => (
          <Card>{repo.name}</Card>
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
    )
  }
}

export default App;
