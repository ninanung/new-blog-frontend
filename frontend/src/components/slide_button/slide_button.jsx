import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle-button';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dark: state.dark,
    }
}

class SlideButton extends React.Component {
    render() {
        const { dark, onSlideChange } = this.props;
        return (
            <div className='slide_button'>
                <Toggle
                    value={dark}
                    onToggle={onSlideChange}
                    inactiveLabel={'☾'}
                    activeLabel={'☀'}
                    colors={{
                        /*activeThumb: {
                        base: 'rgb(250,250,250)',
                        },
                        inactiveThumb: {
                        base: 'rgb(62,130,247)',
                        },*/
                        active: {
                        base: '#2B85D5',
                        //hover: 'rgb(177, 191, 215)',
                        },
                        inactive: {
                        base: '#4B4B4B',
                        //hover: 'rgb(95,96,98)',
                        }
                    }}
                />
            </div>
        )
    }
}

SlideButton.propTypes = {
    onSlideChange: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(SlideButton);