import React from 'react';
import { Form } from 'semantic-ui-react'
import { Container, Header } from 'semantic-ui-react'

class NewSlangForm extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {

    //     }
    // }

    render() {
        const regionOptions = [
            {text: "Western", value: "Western"}, 
            {text: "Midwest", value: "Midwest"}, 
            {text: "Southern", value: "Southern"},
            {text: "Northeast", value: "Northeast"}
        ]
        return (
            <div>
                <Container>
                    <Header as='h2'>Make Some Slang</Header>
                    <Form>
                        <Form.Group widths="equal">
                            <Form.Input label='Title' placeholder='Title'/>
                            <Form.Select label="Region" placeholder="Select Region" options={regionOptions} />
                        </Form.Group>
                        <Form.TextArea label='Description' placeholder='Description in context...' />
                        <h4>Record</h4>
                        {/* will want to make this button turn red when recording */}
                        <Form.Button circular icon="circle outline" />
                        <Form.Button>Submit</Form.Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default NewSlangForm