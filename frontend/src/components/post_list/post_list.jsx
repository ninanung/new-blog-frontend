import React from 'react';
import PropTypes from 'prop-types';

import PostElement from '../post_element/post_element';

class PostList extends React.Component {
    render() {
        return (
            <div className='post_list'>
                {
                    this.props.posts.map((post, index) => {
                        <PostElement post={post} index={index} />
                    })
                }
            </div>
        )
    }
}

PostList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PostList;