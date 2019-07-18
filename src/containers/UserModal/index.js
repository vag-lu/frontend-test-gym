import React, { Component } from 'react'
import Modal from 'react-modal'

import './index.css'

class UserModal extends Component {

    render() {
        const {
            showModal,
            gitUser, 
            onGoClick,
            handleGitUserChange
        } = this.props

        return (
            < div >
                <Modal
                    isOpen={showModal}
                    className='modal'
                    overlayClassName='overlay'>
                    <div className='modalContent'>
                        <p>Insert GitHub user:</p>
                        <input type='text' value={gitUser} onChange={handleGitUserChange}></input>
                        <button onClick={onGoClick}>Go!</button>
                    </div>
                </Modal>
            </div >
        )
    }
}

export default UserModal