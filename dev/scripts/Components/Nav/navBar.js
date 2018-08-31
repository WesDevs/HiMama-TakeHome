import React from 'react';
import NavItems from './nav-items';

class NavBar extends React.Component {

    render() {
        return (
        <ul className={this.props.data.style}>
            <img src="public/assets/himamalogo.png" alt="Himama Company Logo"/>
            <div>
                {
                    this.props.data.data.map((items, i) => {
                        return <NavItems text = {items.value} link = {items.link} key = {i}/>
                    })
                }
            </div>
        </ul>
        )
    }
}

export default NavBar;