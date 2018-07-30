import React from 'react';
import { Menu, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Menu fixed="top" widths={3}>
                <Menu.Item name='home'>
                    <Link to='/'>
                        <Icon name='home' />
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    Slangin'
                </Menu.Item>                
                <Menu.Item name='Add Slang'>
                    <Link to="/newslang">
                        <Icon name='plus circle' />            
                    </Link>
                    Add Slang
                </Menu.Item>            
            </Menu>
        </div>
    )
}

export default NavBar