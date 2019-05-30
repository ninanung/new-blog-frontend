import React from 'react';
import Editor from 'tui-editor';
import { Helmet } from 'react-helmet';

import './post.css';

import { DELETE_POST } from '../../constants/server';

import MakePost from '../../screens/make_post/make_post';
import Button from '../button/button';

// for Toast editer
import 'tui-editor/dist/tui-editor-Viewer.js';
import 'tui-editor/dist/tui-editor-contents.css'; // editor content

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/action';

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        manager: state.manager,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        renew_last_updated: actions.renew_last_updated,
    }, dispatch)
}

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
            makePost: false,
            editor: null,
        }
    }

    componentWillMount() {
        const { match, posts } = this.props;
        const index = match.params.index;
        if(!index || !posts[parseInt(index)]) return window.location.href = '/404';
        else return this.setState({
            post: posts[parseInt(index)],
        })
    }

    componentDidMount() {
        const editor = new Editor.factory({
            el: document.querySelector('#viewerSection'),
            viewer: true,
            height: '300px',
            initialValue: this.state.post.text,
        })
        this.setState({
            editor,
        })
    }

    onMakePostClick = (change) => {
        this.setState({
            makePost: change,
        })
    }

    onDeleteClick = () => {
        const { post } = this.state;
        fetch(DELETE_POST, {
            method: 'post',
            headers: new Headers({
                'auth': '1004Nmnm!',
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({
                'id': post.id,
            }),
        }).then(res => res.json()).then(function(data) {
            window.location.href = '/board';
            window.alert(data.message);
        }).catch(function(err) {
            window.alert(err);
        })
    }

    onLinkClick = (to) => {
        this.props.history.push(to);
    }

    render() {
        const { post } = this.state;
        const { posts, match } = this.props;
        const date = new Date(post.date);
        const dateString = `${date.getFullYear()} ${date.getMonth()}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`

        return (
            <div className='post'>
                <Helmet>
                    <title>{post.title}</title>
                </Helmet>
                {this.state.makePost ? <MakePost post={post} edit={true} onCloseClickFunction={this.onMakePostClick.bind(null, false)} /> : null}
                <h2>{post.title}</h2>
                <p>{dateString}</p>
                <div className='post_viewer'>
                    <div id='viewerSection'></div>
                </div>
                <div className='post_button_group'>
                    {posts[parseInt(match.params.index) + 1] ? <Button text='< Previous' onClickFunction={this.onLinkClick.bind(null,`/post/${parseInt(match.params.index) + 1}`)} /> : null}
                    {this.props.manager ? <Button text='Edit' onClickFunction={this.onMakePostClick.bind(null, true)} /> : null}
                    {this.props.manager ? <Button text='Delete' onClickFunction={this.onDeleteClick} /> : null}
                    <Button text='List' onClickFunction={this.onLinkClick.bind(null, '/board')} />
                    {posts[parseInt(match.params.index) - 1] ? <Button text='next >' onClickFunction={this.onLinkClick.bind(null,`/post/${parseInt(match.params.index) - 1}`)} /> : null}
                </div>
            </div>
        )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);