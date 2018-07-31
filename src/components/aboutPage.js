import React from 'react'
import { Transition, Container, Header } from 'semantic-ui-react';

const AboutPage = () => {
    return (
        <div className="modal-about">
            <Transition visible={true} transitionOnMount={true}>
                <Container text>
                    <Header as="h1">About</Header>
                    <p>
                        Built for chronicling the favorite regionalisms, pronunciations and slang throughout the American regions.
                    </p>
                </Container>
            </Transition>
        </div>
    )
}

export default AboutPage