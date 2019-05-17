import React from 'react';
import PropTypes from 'prop-types';

import PostElement from '../post_element/post_element';

class PostList extends React.Component {
    render() {
        let renderPosts;
        const { posts, count } = this.props;
        if(count) {
            renderPosts = posts.slice(0, count);
        } else {
            renderPosts = posts.slice();
        }
        return (
            <div className='post_list'>
                {renderPosts.length > 0 ? renderPosts.map((post, index) => {
                    return <PostElement post={post} index={index} />
                }) : <div className='post_list_empty_text'>No Posts</div>}
            </div>
        )
    }
}

PostList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
    count: PropTypes.number,
}

export default PostList;