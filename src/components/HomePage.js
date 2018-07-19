import React from 'react'
import { Button } from 'semantic-ui-react'

const HomePage = () => {
    return (
        <div>
            <h1>Slangin'</h1>
            <br/>
            <Button content='West' primary />
            <Button content='Midwest' primary />
            <Button content='South' primary />
            <Button content='Northeast' primary />
        </div>
    )
}

export default HomePage