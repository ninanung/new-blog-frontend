import React from 'react';

import Button from '../../components/button/button';
import ManageMode from '../manage_mode/manage_mode';
import MakePost from '../make_post/make_post';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: false,
            manage: false,
        }
    }

    onPostClick = (change) => {
        this.setState({
            post: change,
        })
    }

    onManageClick = (change) => {
        this.setState({
            manage: change,
        })
    }

    render() {
        return (
            <div>
                <div className='button-group'>
                    {localStorage.isMe ? <Button text='New Post' onClickFunction={this.onPostClick.bind(null, true)} /> : null}
                    {!localStorage.isMe ? <Button text='Gandalf?' onClickFunction={this.onManageClick.bind(null, true)} /> : null}
                </div>
                <div className='modal-group'>
                    {this.state.manage ? <ManageMode onClickFunction={this.onManageClick.bind(null, false)}/> : null}
                    {this.state.post ? <MakePost edit={false} onClickFunction={this.onPostClick.bind(null, false)}/> : null}
                </div>
            </div>
        )
    }
}

export default Header;