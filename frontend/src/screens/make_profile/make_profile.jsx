import React from 'react';
import Editor from 'tui-editor';
import PropTypes from 'prop-types';

import { EDIT_PROFILE } from '../../constants/server';

import Button from '../../components/button/button';
import Modal from '../../components/modal/modal';

// for Toast editer
import 'codemirror/lib/codemirror.css'; // codemirror
import 'tui-editor/dist/tui-editor.css'; // editor ui
import 'tui-editor/dist/tui-editor-contents.css'; // editor content
import 'highlight.js/styles/github.css'; // code block highlight

class MakeProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editor: null,
        }
    }

    componentDidMount() {
        const { profile } = this.props;
        let editor = new Editor({
            el: document.querySelector('#editSection'),
            initialEditType: 'markdown',
            previewStyle: 'vertical',
            initialValue: profile,
        })
        this.setState({
            editor,
        });
    }

    onProfile = () => {
        const { onCloseClickFunction } = this.props;
        const { editor } = this.state;
        const content = editor.getMarkdown();
        fetch(EDIT_PROFILE, {
            method: 'post',
            headers: new Headers({
                'auth': '1004Nmnm!',
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                'text': content,
            }),
        }).then(res => res.json()).then(function(data) {
            onCloseClickFunction();
            window.alert(data.message);
        }).catch(function(err) {
            window.alert(err.message);
        })
    }

    returnModalContent = () => {
        return (
            <div className='make_post_body'>
                <div id='editSection'></div>
                <Button text='Edit Profile' onClickFunction={this.onProfile} />
            </div>
        )
    }

    render() {
        return (
            <div>
                <Modal onCloseClick={this.props.onCloseClickFunction} content={this.returnModalContent()} />
            </div>
        )
    }
}

MakeProfile.propTypes = {
    onCloseClickFunction: PropTypes.func.isRequired,
    profile: PropTypes.string.isRequired,
}

export default MakeProfile;