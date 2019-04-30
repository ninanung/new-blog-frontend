import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

class Button extends React.Component {
    render() {
        const {text, onClickFunction} = this.props;
        return (
            <button className='button' onClick={onClickFunction}>{text}</button>
        )
    }
};

Button.propTypes = {
    onClickFunction: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
}

export default Button;