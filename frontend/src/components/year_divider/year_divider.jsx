import React from 'react';
import PropTypes from 'prop-types';

import './year_divider.css';

import YearTag from './year_tag/year_tag';
import PostElement from '../post_element/post_element';

class YearDivider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postElements: [],
            hide: this.props.hide,
        }
    }

    componentWillMount() {
        const { posts } = this.props;
        this.setState({
            postElements: posts.map((post, index) => {
                return <PostElement key={index} post={post} index={index} />
            })
        })
    }

    onYearClick = () => {
        const { hide } = this.state;
        this.setState({
            hide: !hide
        })
    }

    render() {
        const { year } = this.props;
        const { postElements, hide } = this.state;

        return (
            <div>
                <div className='year_divider_tag' onClick={this.onYearClick}>
                    <YearTag year={year} />
                </div>
                {hide ? postElements : null}
            </div>
        )
    }
}

YearDivider.propTypes = {
    year: PropTypes.number.isRequired,
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
    hide: PropTypes.bool.isRequired,
}

export default YearDivider;