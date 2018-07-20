import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Menu>
                <Link to='/'>
                    <Menu.Item name='home' />
                </Link>
            </Menu>
        </div>
    )
}

export default NavBar