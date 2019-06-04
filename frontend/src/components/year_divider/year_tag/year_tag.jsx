import React from 'react';
import PropTypes from 'prop-types';

import './year_tag.css';

class YearTag extends React.Component {
    render() {
        return (
            <h3 className='year_tag'>{this.props.year}</h3>
        )
    }
}

YearTag.propTypes = {
    year: PropTypes.number.isRequired,
}

export default YearTag;