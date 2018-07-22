import React from 'react';
import { Redirect } from 'react-router'
import { Form } from 'semantic-ui-react';
import { Container, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createSaying } from '../actions/getSayings'
import { Link } from 'react-router-dom';

// TODO: 
    // connect component to redux
    // handle change events to input and store them to component state
    // handle submit event and dispatch action to reducer with the form data

class NewSlangForm extends React.Component {
    
    //component state will potentially handle the form data...unless you want to try and use redux form...do that lab to help you
    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            region: ''
        }
    }

    handleChange = (e) => {
        if (e.target.tagName === 'DIV') {
            this.setState({
                region: e.target.firstElementChild.innerText.toLowerCase()
            })            
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createSaying(this.state)
    }

    render() {
        console.log(this.state)
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
                    <Form onSubmit={this.handleSubmit} >
                        <Form.Group widths="equal">
                            <Form.Input onChange={this.handleChange} value={this.state.title} name='title' label='Title' placeholder='Title'/>
                            <Form.Select onChange={this.handleChange} name="region" label="Region" placeholder="Select Region" options={regionOptions} />
                        </Form.Group>
                        <Form.TextArea onChange={this.handleChange} value={this.state.description} name="description" label='Description' placeholder='Description in context...' />
                        <h4>Record</h4>
                        {/* will want to make this button turn red when recording */}
                        <Form.Button circular icon="circle outline" />
                        {/* for some reason it links properly, but the post request, slang creation process won't happen */}
                        {/* <Link to={`/regions/${this.state.region}`}> */}
                            <Form.Button>Submit</Form.Button>                        
                        {/* </Link> */}
                    </Form>
                </Container>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         region: state.selectedRegion
//     }
// }

export default connect(null, { createSaying })(NewSlangForm)