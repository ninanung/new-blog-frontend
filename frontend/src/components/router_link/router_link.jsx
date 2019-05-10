import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './router_link.css';

class RouterLink extends React.Component {
    render() {
        return (
            <div className='link_style'>
                <Link to={this.props.href}>{this.props.text}</Link>
            </div>
        )
    }
}

RouterLink.propTypes = {
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
}

export default RouterLink;