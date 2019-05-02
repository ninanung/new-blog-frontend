import React from 'react';

import './footer.css';

import github_icon from '../../assets/github_icon.png';

class Footer extends React.Component {
    render() {
        return (
            <div className='footer_text'>
                <a href='https://github.com/ninanung'><img className='footer_github_icon' alt='gitgitgit hub' src={github_icon} /></a>
            </div>
        )
    }
}

export default Footer;