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

    onPostClick = () => {
        this.setState({
            post: true,
        })
    }

    onManageClick = () => {
        this.setState({
            manage: true,
        })
    }

    render() {
        return (
            <div>
                <div className='button-group'>
                    {localStorage.isMe ? <Button text='Post' onClickFunction={this.onPostClick} /> : null}
                    {!localStorage.isMe ? <Button text='Manage' onClickFunction={this.onManageClick} /> : null}
                </div>
                <div className='modal-group'>
                    {this.state.manage ? <ManageMode/> : null}
                    {this.state.post ? <MakePost/> : null}
                </div>
            </div>
        )
    }
}

export default Header;