import React, { Component } from 'react'
import Modal from 'react-modal'

import './index.css'

class UserModal extends Component {
    onKeyClick = (event) => {
        var code = event.keyCode || event.which;
        if (code === 13) { 
            this.props.onGoClick()
        }
    }

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
                        <p>Insert GitHub user</p>
                        <input id='userInput' type='text' value={gitUser}
                            onChange={handleGitUserChange} onKeyPress={this.onKeyClick.bind(this)}></input>
                        <button id='goButton' onClick={onGoClick}>Go!</button>
                    </div>
                </Modal>
            </div >
        )
    }
}

export default UserModal