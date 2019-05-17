import React from 'react';

class Post extends React.Component {
    componentWillMount() {
        const { match } = this.props;
        if(!match) return window.location.href = '/';
        console.log(match)
    }

    render() {
        return (
            <div className='post'>
                <h2>test title</h2>
                <p>test date</p>
                <div id='post_content' className='post_content'></div>
            </div>
        )
    }
};

export default Post;