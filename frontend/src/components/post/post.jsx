import React from 'react';
import { Helmet } from 'react-helmet';

import './post.css';

import { DELETE_POST } from '../../constants/server';

import MakePost from '../../screens/make_post/make_post';
import Button from '../button/button';
import TuiEditorViewer from '../tui_editor_viewer/tui_editor_viewer';

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

    /*componentWillMount() {
        const { match, posts, history } = this.props;
        const index = match.params.index;
        if(!index || !posts[parseInt(index)]) return history.push('/404');
        else {
            const post = posts[parseInt(index)]
            return this.setState({
                post,
            })
        }
    }*/

    onMakePostClick = (makePost) => {
        this.setState({
            makePost,
        })
    }

    onDeleteClick = () => {
        const { post } = this.state;
        if(window.confirm('Do you really want to delete?')) {
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
        } else return ;
    }

    onLinkClick = (to, index) => {
        const { posts } = this.props;
        this.setState({
            post: posts[parseInt(index)],
        });
        this.props.history.push(to);
    }

    render() {
        //const { post } = this.state;
        const { posts, match, history } = this.props;
        const index = match.params.index;
        if(!index || !posts[parseInt(index)]) return history.push('/404');
        const post = posts[parseInt(index)]
        const date = new Date(post.date);
        const dateString = `${date.getFullYear()} ${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
        return (
            <div className='post'>
                <Helmet>
                    <title>{post.title}</title>
                </Helmet>
                {this.state.makePost ? <MakePost post={post} edit={true} onCloseClickFunction={this.onMakePostClick.bind(null, false)} /> : null}
                <h2>{post.title}</h2>
                <p>{dateString}</p>
                <div className='post_viewer'>
                    <TuiEditorViewer height='300px' text={post.text} />
                </div>
                <div className='post_button_group'>
                    {posts[parseInt(match.params.index) + 1] ? <Button text='< Previous' onClickFunction={this.onLinkClick.bind(null,`/post/${parseInt(match.params.index) + 1}`, parseInt(match.params.index) + 1)} /> : null}
                    {this.props.manager ? <Button text='Edit' onClickFunction={this.onMakePostClick.bind(null, true)} /> : null}
                    {this.props.manager ? <Button text='Delete' onClickFunction={this.onDeleteClick} /> : null}
                    <Button text='List' onClickFunction={this.onLinkClick.bind(null, '/board')} />
                    {posts[parseInt(match.params.index) - 1] ? <Button text='next >' onClickFunction={this.onLinkClick.bind(null,`/post/${parseInt(match.params.index) - 1}`, parseInt(match.params.index) - 1)} /> : null}
                </div>
            </div>
        )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);