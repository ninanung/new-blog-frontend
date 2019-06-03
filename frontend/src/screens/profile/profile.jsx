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
            profile: null,
        }
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default connect(mapStateToProps)(Profile);