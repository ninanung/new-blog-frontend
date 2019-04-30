import React from 'react';
import PropTypes from 'prop-types';

import styles from './manage_mode.css';

import Modal from '../../components/modal/modal';
import Button from '../../components/button/button';

class ManageMode extends React.Component {
    returnModalContent = () => {
        return (
            <div>
                <div className={styles.close}>
                    <Button text='Close' onClickFunction={this.props.onClickFunction} />
                </div>
                <div className={styles.body}>
                    
                </div>
            </div>
        )
    }

    render() {
        return (
            <Modal content={this.returnModalContent()} />
        )
    }
};

ManageMode.propTypes = {
    onClickFunction: PropTypes.func.isRequired,
}

export default ManageMode;