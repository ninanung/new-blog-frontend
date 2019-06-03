import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './post_element.css';

class PostElement extends React.Component {
    render() {
        const { post, index } = this.props;
        const date = new Date(post.date);
        const dateString = `${date.getFullYear()} ${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
        const url = `/post/${index}`

        return (
            <div className='post_element'>
                <h3 className='post_element_title'><Link to={ url }>{ post.title }</Link></h3>
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