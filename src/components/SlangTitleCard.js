import React from 'react';
import { Container, Header, Segment, Card } from 'semantic-ui-react'

const SlangTitleCard = () => {
    return (
        <div>
            <Card color="orange">
                <Card.Content textAlign="left" description="69 people are saying..." />
                <Card.Content content='"this super sick saying"'/>
            </Card>
        </div>
    )
}

export default SlangTitleCard