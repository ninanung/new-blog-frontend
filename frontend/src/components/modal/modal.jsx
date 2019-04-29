import React from 'react';
import PropTypes from 'prop-types';

import styles from './modal.css'

class Modal extends React.Component {
    render() {
        return (
            <div className={styles.modal}>
                {this.props.content}
            </div>
        )
    }
};

Modal.propTypes = {
    content: PropTypes.object.isRequired,
}

export default Modal;