import React from 'react';
import Editor from 'tui-editor';
import PropTypes from 'prop-types';
/*import request from 'request';
import rp from 'request-promise';

import constants from '../../constants/server';*/

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
            badge: [],
            editor: null,
        }
    }

    componentDidMount() {
        this.setState({
            editor: new Editor({
                el: document.querySelector('#editSection'),
                initialEditType: 'markdown',
                previewStyle: 'vertical',
                height: '500px'
            }),
        });
    }

    onEditClick = () => {
        /*
            request를 이용한 server로의 데이터 전송 필요.
        */
    }
    
    onPostClick = () => {
        console.log(this.state.editor.getHtml());
        /*
            request를 이용한 server로의 데이터 전송 필요.
        */
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
                <div id='editSection'></div>
                <Button text={text} onClickFunction={onClickFunction} />
            </div>
        )
    }

    render() {
        return (
            <Modal onCloseClick={this.props.onClickFunction} content={this.returnModalContent()} />
        )
    }
};

MakePost.propTypes = {
    edit: PropTypes.bool.isRequired,
    onClickFunction: PropTypes.func.isRequired,
}

export default MakePost;