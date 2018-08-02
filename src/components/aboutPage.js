import React from 'react'
import { connect } from 'react-redux';
import { Transition, Container, Header } from 'semantic-ui-react';
import { setPreviousPath } from '../actions/getSayings'

class AboutPage extends React.Component {

    componentDidMount() {
        this.props.setPreviousPath(window.location.pathname)
    }

    render() {
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
}

export default connect(null, { setPreviousPath })(AboutPage)