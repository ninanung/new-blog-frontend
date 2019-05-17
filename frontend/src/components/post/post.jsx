import React from 'react';

import MakePost from '../../screens/make_post/make_post';

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
        const postBody = document.getElementById('post_content');
        postBody.innerHTML = this.state.post.text;
    }

    render() {
        const { post } = this.state;
        const date = new Date(post.date);
        const dateString = `${date.getFullYear()} ${date.getMonth()}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`

        return (
            <div className='post'>
                <h2>{post.title}</h2>
                <p>{dateString}</p>
                <div id='post_content' className='post_content'></div>
            </div>
        )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);