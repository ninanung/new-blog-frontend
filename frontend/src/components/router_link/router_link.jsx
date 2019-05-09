import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './router_link.css';

class RouterLink extends React.Component {
    render() {
        return (
            <Link to={this.props.href}><div className='link_style'>{this.props.text}</div></Link>
        )
    }
}

RouterLink.propTypes = {
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
}

export default RouterLink;