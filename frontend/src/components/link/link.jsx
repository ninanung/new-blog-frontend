import React from 'react';
import PropTypes from 'prop-types';

import './link.css';

class Link extends React.Component {
    render() {
        return (
            <a href={this.props.href} className='link_style'>{this.props.text}</a>
        )
    }
}

Link.propTypes = {
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
}

export default Link;