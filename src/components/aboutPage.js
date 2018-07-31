import React from 'react'
import { Transition } from 'semantic-ui-react';

const AboutPage = () => {
    return (
        <div className="modal-about">
            <Transition visible={true} transitionOnMount={true}>
                <h1>about this</h1>
            </Transition>
        </div>
    )
}

export default AboutPage