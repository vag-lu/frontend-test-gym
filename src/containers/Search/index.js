import React, {Component}  from 'react'

import './index.css'

class Search extends Component{
    render() {
        const {
            handleSearchChange,
            search
        } = this.props 

        return (
            <div className='search'>
                <input value={search} onChange={handleSearchChange} type='text' placeholder='Search'></input>
            </div>
        )
    }
}

export default Search 