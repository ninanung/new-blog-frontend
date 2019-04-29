import React from 'react';

import Modal from '../../components/modal/modal';

class ManageMode extends React.Component {
    returnModalContent = () => {
        return (
            <div>
                
            </div>
        )
    }

    render() {
        return (
            <Modal content={this.returnModalContent()} />
        )
    }
};

export default ManageMode;