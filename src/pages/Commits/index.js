import React, { Component } from 'react'

import './index.css'
import CommitCard from '../../containers/CommitCard';

class Commits extends Component {
    render() {
        return (
            <div class="timeline">
                <CommitCard/>
                <CommitCard/>
                <CommitCard/>
                <CommitCard/>
                <CommitCard/>
                <CommitCard/>
                <CommitCard/>
                <CommitCard/>
                <CommitCard/>
                <CommitCard/>
            </div>
        )
    }
}

export default Commits