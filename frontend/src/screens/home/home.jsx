import React from 'react';
import { Helmet } from 'react-helmet';

import PostList from '../../components/post_list/post_list';
import RouterLink from '../../components/router_link/router_link';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
}

class Home extends React.Component {
    render() {
        const { posts } = this.props;

        return (
            <div>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <div className='home_body'>
                    <div className='home_body_latest'>
                        <PostList posts={posts} count={10} />
                    </div>
                    <RouterLink text='See more?' href='/board' />
                </div>
            </div>
        )
    }
};

export default connect(mapStateToProps)(Home);