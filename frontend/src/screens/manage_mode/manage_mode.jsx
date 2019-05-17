import React from 'react';
import PropTypes from 'prop-types';
/*import request from 'request';
import rp from 'request-promise';
import { LOGIN } from '../../constants/server';*/

import './manage_mode.css';

import pass from '../../assets/youshallnotpass.jpg';

import Modal from '../../components/modal/modal';
import Button from '../../components/button/button';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/action';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        manager_login: actions.manager_login,
    }, dispatch)
}

class ManageMode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
    }

    onInputChange = (e) => {
        this.setState({
            input: e.target.value,
        })
    }

    onYesClick = () => {
        console.log(this.state.input);
        /*
            request를 이용한 server로의 데이터 전송 필요.
        */
        this.props.manager_login();
        window.location.href = '/';
    }

    returnModalContent = () => {
        return (
            <div className='manage_mode_body'>
                <img alt='You! Shall Not! Pass!!!!!!!!' className='manage_mode_img' src={pass} />
                <input type='text' onChange={this.onInputChange} />
                <Button text='Fly, you fools' onClickFunction={this.onYesClick} />
            </div>
        )
    }

    render() {
        return (
            <Modal onCloseClick={this.props.onClickFunction} content={this.returnModalContent()} />
        )
    }
};

ManageMode.propTypes = {
    onClickFunction: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(ManageMode);