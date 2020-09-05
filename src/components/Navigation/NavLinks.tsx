import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import {AuthContext} from '../context/auth-context';

const NavLinks = (props: any) => {
    const auth = useContext(AuthContext);

    return (
        <ul className = 'nav-links'>
            {!auth.isLoggedIn && (<li>
                (<NavLink to='/signup'>Sign-up</NavLink>
            </li>)}
            {auth.isLoggedIn && (<li>
                <button onClick={auth.logout}>Logout</button>
            </li>)}
        </ul>
    )
}

export default NavLinks;