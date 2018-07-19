import React from 'react';
import { Card, Icon, Button } from 'semantic-ui-react'

const SlangDetailsCard = () => {
    return (
        <div>
            <Card>
                <Card.Content header='Slang Title' />
                <Card.Content description="Description of the Slang" />
                <Card.Content extra>
                <br />
                Listen
                <Button circular icon="play circle outline">
                    
                </Button>
                <Button circular content="I say this too!" />
                </Card.Content>
            </Card>
        </div>
    )
}

export default SlangDetailsCard