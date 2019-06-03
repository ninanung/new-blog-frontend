import React from 'react';

import { GET_PROFILE } from '../../constants/server';

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
        }
    }

    componentWillMount() {
        const updateState = this.updateState;
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
        const { profile, makeProfile } = this.state;
        const { manager } = this.props;
        return (
            <div>
                {makeProfile ? <MakeProfile profile={profile} onCloseClickFunction={this.onMakeProfileClick.bind(null, false)} /> : null}
                {profile ? <TuiEditorViewer text={profile} height='300px' /> : <h2>There's no profile yet.</h2>}
                {manager ? <Button text='Edit' onClickFunction={this.onMakeProfileClick.bind(null, true)} /> : null}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Profile);