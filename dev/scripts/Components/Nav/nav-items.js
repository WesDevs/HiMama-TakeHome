import React from 'react';

const NavItems = (props) => {
    return ( 
        <li className = {`nav-list-items ${props.style}`}>
            <a href={props.link}>
                {props.text !== ''? props.text : ''}
            </a>
        </li>
    )
}

export default NavItems;