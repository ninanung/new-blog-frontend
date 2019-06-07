import React from 'react';
import Helmet from 'react-helmet';

import { GET_PROFILE } from '../../constants/server';

import './profile.css';

import MakeProfile from '../make_profile/make_profile';
import Button from '../../components/button/button';
import TuiEditorViewer from '../../components/tui_editor_viewer/tui_editor_viewer';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        manager: state.manager,
    }
}

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: '',
            makeProfile: false,
            helmet: null,
        }
    }

    componentWillMount() {
        const updateState = this.updateState;
        this.setState({
            helmet: <Helmet><title>Profile</title></Helmet>
        })
        fetch(GET_PROFILE, {
            method: 'get',
        }).then(res => res.json()).then(function(data) {
            if(data.profile) updateState(data.profile.text);
        }).catch(function(err) {
            window.alert(err.message);
        });
    }

    updateState = (profile) => {
        this.setState({
            profile,
        })
    }

    onMakeProfileClick = (makeProfile) => {
        this.setState({
            makeProfile,
        })
    }

    render() {
        const { profile, makeProfile, helmet } = this.state;
        const { manager } = this.props;
        return (
            <div>
                {helmet}
                {makeProfile ? <MakeProfile profile={profile} onCloseClickFunction={this.onMakeProfileClick.bind(null, false)} /> : null}
                {profile ? <div className='profile_viewer'><TuiEditorViewer text={profile} height='300px' /></div> : <h2>There's no profile yet.</h2>}
                {manager ? <Button text='Edit Profile' onClickFunction={this.onMakeProfileClick.bind(null, true)} /> : null}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Profile);