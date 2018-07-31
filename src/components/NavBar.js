import React from 'react';
import { Menu, Icon, Reveal, Card, Segment, Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    render() {
        return (
            <div>
                    
                <Menu fixed="top" widths={3}>                    
                    <Menu.Item >
                        <Link to='/about'>                            
                            <h1>Slangin'</h1>   
                        </Link>
                    </Menu.Item> 
                    <Menu.Item name='home'>
                        <Link to='/'>
                            <Icon size="big" name='home' />
                        </Link>
                    </Menu.Item>
                    <Menu.Item name='Add Slang'>
                        <Link to="/newslang">
                            <Icon size="big" name='plus circle' />            
                        </Link>
                        Add Slang
                    </Menu.Item>            
                </Menu>
            </div>
        )
    }
}

export default NavBar