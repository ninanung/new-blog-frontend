import React from 'react';
import PropTypes from 'prop-types';

class PostElement extends React.Component {
    render() {
        const { post, index } = this.props;
        return (
            <div className='post_element'>
                <h3 className='post_element_title'>{ post.title }</h3>
                <p className='post_element_date'>{ post.date }</p>
            </div>
        )
    }
}

PostElement.propTypes = {
    post: PropTypes.object.isRequired,
    index: PropTypes.number,
}

export default PostElement;