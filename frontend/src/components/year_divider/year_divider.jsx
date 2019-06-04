import React from 'react';
import PropTypes from 'prop-types';

import './year_divider.css';

class YearDivider extends React.Component {
    render() {
        return (
            <h3 className='year_divider'>{this.props.year}</h3>
        )
    }
}

YearDivider.propTypes = {
    year: PropTypes.number.isRequired,
}

export default YearDivider;