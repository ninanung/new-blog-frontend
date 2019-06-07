import React from 'react';

import './header.css';

import haruko from '../../assets/haruko_bass.gif';

import Button from '../../components/button/button';
import ManageMode from '../manage_mode/manage_mode';
import MakePost from '../make_post/make_post';
import SlideButton from '../../components/slide_button/slide_button';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/action';

const mapStateToProps = (state) => {
    return {
        manager: state.manager,
        dark: state.dark,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        manager_logout: actions.manager_logout,
        change_dark_mode: actions.change_dark_mode,
    }, dispatch)
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: false,
            manage: false,
        }
    }

    onPostClick = (change) => {
        this.setState({
            post: change,
        })
    }

    onManageClick = (change) => {
        this.setState({
            manage: change,
        })
    }

    onLogoutClick = () => {
        const confirmed = window.confirm('Do you want to log-out?');
        if(!confirmed) return ;
        this.props.manager_logout();
        return window.location.href = '/';
    }

    onDarkClick = () => {
        const { change_dark_mode, dark } = this.props;
        const change = !dark;
        change_dark_mode(change);
    }

    render() {
        return (
            <div className='header'>
                <a href='/'><img className='header_gif' src={haruko} alt='bo bobobo bong' /></a>
                <div className='button_group_right'>
                    {!this.props.manager ? <Button text='Gandalf?' onClickFunction={this.onManageClick.bind(null, true)} /> : null}
                    {this.props.manager ? <Button text='Logout' onClickFunction={this.onLogoutClick} /> : null}
                </div>
                <div className='button_group_left'>
                    {this.props.manager ? <Button text='New Post' onClickFunction={this.onPostClick.bind(null, true)} /> : null}
                    <SlideButton onSlideChange={this.onDarkClick} />
                </div>
                <div className='modal_group'>
                    {this.state.manage ? <ManageMode onCloseClickFunction={this.onManageClick.bind(null, false)}/> : null}
                    {this.state.post ? <MakePost edit={false} onCloseClickFunction={this.onPostClick.bind(null, false)}/> : null}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);