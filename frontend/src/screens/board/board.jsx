import React from 'react';

import PostList from '../../components/post_list/post_list';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
}

class Board extends React.Component {
    render() {
        return (
            <div>
                <PostList posts={this.props.posts} />
            </div>
        )
    }
};

export default connect(mapStateToProps)(Board);