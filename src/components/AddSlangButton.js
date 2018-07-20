import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const AddSlangButton = () => {
    return (
        <div>
            <h4>Add Slang</h4>
            <Link to="/newslang">
                <Button circular icon='plus' />            
            </Link>
        </div>
    )
}

export default AddSlangButton