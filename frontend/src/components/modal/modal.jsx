import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='modal-form'>
                {this.props.content}
            </div>
        )
    }
};

Modal.propTypes = {
    content: PropTypes.object.isRequired,
}

export default Modal;