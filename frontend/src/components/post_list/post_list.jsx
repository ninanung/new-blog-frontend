import React from 'react';
import PropTypes from 'prop-types';

import YearDivider from '../year_divider/year_divider';
import PostElement from '../post_element/post_element';

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renderPosts: [],
        }
    }

    componentWillMount() {
        const { posts, count } = this.props;
        this.setState({
            renderPosts: this.returnList(posts, count),
        })
    }

    returnList = (posts, count) => {
        if(posts.length <= 0) return <div className='post_list_empty_text'>No Posts</div>;
        let renderPosts = posts
        if(count) renderPosts = posts.slice(0, count);
        else renderPosts = posts.slice();
        renderPosts = renderPosts.sort((a, b) => {
            return b.date - a.date;
        })
        const year = new Date(renderPosts[0].date).getFullYear();
        renderPosts = renderPosts.map((post, index) => {
            if(!count && index === 0) return (
                <div key={index}>
                    <YearDivider year={year} />
                    <PostElement post={post} index={renderPosts.length - 1 - index} />
                </div>
            )
            const postYear = new Date(post.date).getFullYear()
            if(!count && postYear < year) {
                year = postYear;
                return (
                    <div key={index}>
                        <YearDivider year={year} />
                        <PostElement post={post} index={renderPosts.length - 1 - index} />
                    </div>
                )
            }
            return <PostElement key={index} post={post} index={renderPosts.length - 1 - index} />
        })
        return renderPosts;
    }

    render() {
        const { renderPosts } = this.state;
        return (
            <div className='post_list'>
                {renderPosts}
            </div>
        )
    }
}

PostList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
    count: PropTypes.number,
}

export default PostList;