import React from 'react';
import { Card } from 'semantic-ui-react'

const SlangTitleCard = ({ saying }) => {
    return (
        <div>
            <Card color="orange">
                <Card.Content textAlign="left" description={`${saying.votes} people are saying...`} />
                <Card.Content content={saying.title}/>
            </Card>
        </div>
    )
}

export default SlangTitleCard