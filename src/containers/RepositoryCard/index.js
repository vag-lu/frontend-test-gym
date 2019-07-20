import React, { Component } from 'react'
import Card from '../../components/Card';
import { Link } from 'react-router-dom'

import './index.css'

class RepositoryCard extends Component {
    render() {
        const {
            repository,
            gitUser
        } = this.props

        return (
            <div>
                <Card>
                    <Link 
                        className='repository-link'
                        to={
                            {
                                pathname: '/commits',
                                state: {
                                    repositoryName: repository.name,
                                    gitUser: gitUser
                                }
                            }
                    }>
                        <div className='repository-card'>
                            <p className='repository-name'>{repository.name}</p>
                            <p>{repository.html_url}</p>
                            <p>{repository.language}</p>
                        </div>
                    </Link>
                </Card>
            </div>
        )
    }
}

export default RepositoryCard