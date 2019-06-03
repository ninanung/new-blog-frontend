import React from 'react';

import { GET_POSTS } from './constants/server';

import './App.css';

import Header from './screens/header/header';
import Router from './router/router';
import Footer from './screens/footer/footer';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './store/action';

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    last_updated: state.last_updated,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    renew_posts: actions.renew_posts,
    renew_last_updated: actions.renew_last_updated,
  }, dispatch);
}

class App extends React.Component {
  componentWillMount() {
    const { posts, last_updated, renew_posts, renew_last_updated } = this.props;
    const now = new Date().getTime();
    if(posts.length === 0) {
      fetch(GET_POSTS, {
        method: 'get',
        headers: new Headers({
          'auth': '1004Nmnm!', 
        })
      }).then(res => res.json()).then(function(data) {
        renew_posts(data.posts);
        renew_last_updated(now);
      }).catch(function(err) {
        window.alert(err.message);
      });
    } else {
      if(now - last_updated > 1000) {
        fetch(GET_POSTS, {
          method: 'get',
          headers: new Headers({
            'auth': '1004Nmnm!', 
          })
        }).then(res => res.json()).then(function(data) {
          renew_posts(data.posts);
          renew_last_updated(now);
        }).catch(function(err) {
          window.alert(err.message);
        });
      }
    }
  }

  render() {
    return (
      <div className='app'>
        <div className='app_header'>
          <Header />
        </div>
        <div className='app_body'>
          <Router/>
        </div>
        <div className='app_footer'>
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
