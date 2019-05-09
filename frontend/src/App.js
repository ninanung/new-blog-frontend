import React from 'react';
/*import request from 'request';
import rp from 'request-promise';

import constants from '../../constants/server';*/

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
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    renew_posts: actions.renew_posts
  }, dispatch);
}

class App extends React.Component {
  componentWillMount() {
    const { posts, renew_posts } = this.props;
    const now = new Date().getTime();
    if(posts.length === 0) {
      console.log('empty!');
      /*
        서버에서 포스트 리스트 받아옮
      */
      //renew_posts();
    } else {
      if(now - posts[0].date > 3600000) {
        /*
          서버에서 포스트 리스트 받아옮
        */
        //renew_posts();
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
