import React from 'react';
import editor from 'tui-editor';
import PropTypes from 'prop-types';

import Button from '../../components/button/button';

class MakePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            badge: [],
            text: '',
        }
    }

    componentWillMount() {
        
    }

    onEditClick = () => {

    }
    
    onPostClick = () => {

    }

    render() {
        let text = '';
        let onClickFunction = null;
        if(this.props.edit) {
            text = 'Edit';
            onClickFunction = this.onEditClick;
        }
        else {
            text = 'Post';
            onClickFunction = this.onPostClick;
        }
        return (
            <div>
                <div id='editSection'></div>
                <Button text={text} onClickFunction={onClickFunction} />
            </div>
        )
    }
};

MakePost.propTypes = {
    edit: PropTypes.bool.isRequired,
}

export default MakePost;