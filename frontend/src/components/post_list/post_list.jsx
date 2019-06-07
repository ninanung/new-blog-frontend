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
        let renderPosts = [];
        if(count) renderPosts = this.normalList(this.sliceAndSort(posts, count));    
        else renderPosts = this.yearList(this.sliceAndSort(posts, count));
        this.setState({
            renderPosts,
        }) 
    }

    sliceAndSort = (posts, count) => {
        let renderPosts = posts
        if(count) renderPosts = posts.slice(0, count);
        else renderPosts = posts.slice();
        return renderPosts;
    }

    normalList = (posts) => {
        return posts.map((post, index) => {
            return <PostElement key={index} post={post} index={index} />
        })
    }

    yearList = (posts) => {
        if(!posts.length) return [];
        let year = new Date(posts[0].date).getFullYear();
        let point = 0;
        const renderPosts = []
        for(let index in posts) {
            const postYear = new Date(posts[index].date).getFullYear()
            if(year !== postYear) {
                renderPosts.push(<YearDivider key={index} year={year} posts={posts.slice(point, index)} hide={point === 0}/>)
                year = postYear;
                point = index;
            }
            if(parseInt(index) === posts.length - 1) {
                renderPosts.push(<YearDivider key={index} year={year} posts={posts.slice(point, index + 1)} hide={point === 0}/>)
            }
        }
        return renderPosts
    }

    render() {
        const { renderPosts } = this.state;
        return (
            <div className='post_list'>
                {renderPosts.length > 0 ? renderPosts : <div className='post_list_empty_text'><p>No Posts</p></div>}
            </div>
        )
    }
}

PostList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
    count: PropTypes.number,
}

export default PostList;