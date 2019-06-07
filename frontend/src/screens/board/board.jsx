import React from 'react';
import Helmet from 'react-helmet';

import PostList from '../../components/post_list/post_list';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
}

class Board extends React.Component {
    componentWillMount() {
        this.setState({
            helmet: <Helmet><title>Board</title></Helmet>
        })
    }

    render() {
        return (
            <div>
                {this.state.helmet}
                <PostList posts={this.props.posts} />
            </div>
        )
    }
};

export default connect(mapStateToProps)(Board);