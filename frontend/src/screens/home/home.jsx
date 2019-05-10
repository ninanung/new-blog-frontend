import React from 'react';
import { Helmet } from 'react-helmet';

import './home.css';

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
        //const { posts } = this.props;
        const posts = [];
        for(let i = 0; i < 5; i++) {
            posts.push({
                title: `test title ${i}`,
                date: new Date().getTime(),
            })
        }

        return (
            <div className='home_body'>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <div className='home_body_latest'>
                    <h3 className='home_body_recent'>Recent Posts</h3>
                    <PostList posts={posts} count={10} />
                </div>
                <RouterLink text='Wanna see more?' href='/board' />
            </div>
        )
    }
};

export default connect(mapStateToProps)(Home);