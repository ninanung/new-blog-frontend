import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {
    componentWillMount() {
        const content = document.getElementById('post_content');
        content.innerHTML(this.props.post.content);
    }

    render() {
        return (
            <div className='post'>
                <h2>{this.props.post.title}</h2>
                <p>{this.props.post.date}</p>
                <div id='post_content' className='post_content'></div>
            </div>
        )
    }
};

Post.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Post;