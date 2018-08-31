import React from 'react';

class SocialNav extends React.Component {

    render() {
        return (
        <ul className="social-nav-list">
            {
                this.props.socialMedias.map((social, i) => {
                    return <li key = {i} ><a href={social.url}><i className = {social.icon}></i></a></li>
                })
            }
        </ul>
        )
    }
}

export default SocialNav;