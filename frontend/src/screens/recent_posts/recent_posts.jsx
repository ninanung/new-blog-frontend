import React from 'react';
/*import request from 'request';
import rp from 'request-promise';

import constants from '../../constants/server';*/

import PostList from '../../components/post_list/post_list';

class RecentPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null,
            count: 10,
        }
    }

    componentWillMount() {
        /*
            request를 이용해서 posts를 서버에서 불러옮
        */
    }

    render() {
        return (
            <div className='recent_posts'>
                <PostList posts={this.state.posts} count={this.state.count} />
            </div>
        )
    }
}

export default RecentPost;