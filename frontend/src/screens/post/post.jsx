import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {
    render() {
        return (
            <div className='post'>
                <h2>{this.props.post.title}</h2>
                <p>{this.props.post.date}</p>
                <div className='post_content'>
                    {this.props.post.content}
                </div>
            </div>
        )
    }
};

Post.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Post;