import React from 'react';
import PropTypes from 'prop-types';

import './modal.css';

import Button from '../button/button';

class Modal extends React.Component {
    render() {
        return (
            <div className='modal'>
                <div className='modal_close'>
                    <Button text='Close' onClickFunction={this.props.onCloseClick} />
                </div>
                {this.props.content}
            </div>
        )
    }
};

Modal.propTypes = {
    content: PropTypes.object.isRequired,
    onCloseClick: PropTypes.func.isRequired,
}

export default Modal;