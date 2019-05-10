import React from 'react';
import PropTypes from 'prop-types';

import './post_element.css';

class PostElement extends React.Component {
    render() {
        const { post } = this.props;
        const date = new Date(post.date);
        const dateString = `${date.getFullYear()} ${date.getMonth()}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`

        return (
            <div className='post_element'>
                <h3 className='post_element_title'><a className='post_element_title_link' href='/'>{ post.title }</a></h3>
                <p className='post_element_date'>{ dateString }</p>
            </div>
        )
    }
}

PostElement.propTypes = {
    post: PropTypes.object.isRequired,
    index: PropTypes.number,
}

export default PostElement;