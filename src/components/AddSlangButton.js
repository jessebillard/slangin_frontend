import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom';

const AddSlangButton = ({ location }) => {
    // console.log(props)
    if (location.pathname !== "/newslang") {
        return (
            <div id="slang-button">
                <h4>Add Slang</h4>
                <Link to="/newslang">
                    <Button circular icon='plus' />            
                </Link>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default withRouter(AddSlangButton)