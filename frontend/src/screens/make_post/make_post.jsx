import React from 'react';
import Editor from 'tui-editor';
import PropTypes from 'prop-types';
import { CREATE_POST, EDIT_POST } from '../../constants/server';

import './make_post.css';

import Button from '../../components/button/button';
import Modal from '../../components/modal/modal';

// for Toast editer
import 'codemirror/lib/codemirror.css'; // codemirror
import 'tui-editor/dist/tui-editor.css'; // editor ui
import 'tui-editor/dist/tui-editor-contents.css'; // editor content
import 'highlight.js/styles/github.css'; // code block highlight

class MakePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            editor: null,
            html: null,
        }
    }

    componentDidMount() {
        this.setState({
            editor: new Editor({
                el: document.querySelector('#editSection'),
                initialEditType: 'markdown',
                previewStyle: 'vertical',
            }),
        });
    }

    onTitleChange = (e) => {
        this.setState({
            title: e.target.value,
        });
    }

    onEditClick = () => {
        const content = this.state.editor.getHtml();
        fetch(EDIT_POST, {
            method: 'post',
            headers: new Headers({
                'auth': '1004Nmnm!',
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({
                'title': this.state.title,
                'text': content,
            }),
        }).then(res => res.json()).then(function(data) {
            window.alert(data);
        }).catch(function(err) {
            window.alert(err);
        })
    }
    
    onPostClick = () => {
        const { onCloseClickFunction } = this.props;
        const content = this.state.editor.getHtml();
        fetch(CREATE_POST, {
            method: 'post',
            headers: new Headers({
                'auth': '1004Nmnm!',
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({
                'title': this.state.title,
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
        let text = '';
        let onClickFunction = null;
        if(this.props.edit) {
            text = 'Edit';
            onClickFunction = this.onEditClick;
        }
        else {
            text = 'Post';
            onClickFunction = this.onPostClick;
        }
        return (
            <div className='make_post_body'>
                <label>
                    Title
                    <input onChange={this.onTitleChange} className='make_post_title' type='text' />
                </label>
                <div id='editSection'></div>
                <Button text={text} onClickFunction={onClickFunction} />
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
};

MakePost.propTypes = {
    edit: PropTypes.bool.isRequired,
    onCloseClickFunction: PropTypes.func.isRequired,
}

export default MakePost;