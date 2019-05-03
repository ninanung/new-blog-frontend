import React from 'react';
import PropTypes from 'prop-types';

import PostElement from '../post_element/post_element';

class PostList extends React.Component {
    render() {
        let posts;
        if(this.props.count) {
            posts = this.props.posts.slice(0, this.props.count);
        } else {
            posts = this.props.posts.slice();
        }
        return (
            <div className='post_list'>
                {
                    posts.map((post, index) => {
                        <PostElement post={post} index={index} />
                    })
                }
            </div>
        )
    }
}

PostList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
    count: PropTypes.number,
}

export default PostList;