import React, { Component } from 'react'
import Card from '../../components/Card';

import './index.css'


class RepositoryCard extends Component {
    render() {
        const {
           repository 
        } = this.props

        return (
            <div>
                <Card>
                    <div className='repository-card'>
                        <p className='repository-name'>{repository.name}</p>
                        <p>{repository.html_url}</p>
                        <p>{repository.language}</p>
                    </div>
                </Card>
            </div>
        )
    }
}

export default RepositoryCard