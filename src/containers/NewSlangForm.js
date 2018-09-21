import React from 'react';
import { Form, Input, Button, Icon, Transition, Modal } from 'semantic-ui-react';
import { Container, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createSaying, addSayingRecording, setPreviousPath } from '../actions/getSayings';
import OnEvent from 'react-onevent';
import Pizzicato from 'pizzicato'
import { ReactMic } from 'react-mic';

class NewSlangForm extends React.Component {
    
    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            region: '',
            record: false,
            tagsInputValue: '',
            tags: [],
            modalOpen: false,
            modalMessage: ''        
        }
    }

    componentDidMount() {        
        this.props.setPreviousPath(window.location.pathname)
    }

    // form methods
    handleChange = (e) => {
        if (e.target.tagName === 'DIV') {
            this.setState({
                region: e.target.firstElementChild.innerText.toLowerCase()
            })            
        } else if (e.target.tagName === 'SPAN') {
            this.setState({
                region: e.target.innerText.toLowerCase()
            })
        } 
        else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    handleSubmit = (e) => {

        // check to see if title, description, region and recording have been filled out
        if (!this.state.title) {            
            this.setState({
                modalOpen: true,
                modalMessage: "title"
            })            
        } else if (!this.state.description) {            
            this.setState({
                modalOpen: true,
                modalMessage: "description"
            })           
        } else if (!this.state.region) {              
            this.setState({
                modalOpen: true,
                modalMessage: "region"
            })         
        } else if (!this.props.blob) {            
            this.setState({
                modalOpen: true,
                modalMessage: "recording"
            })
        } else {                        
            // make a formData object out of the current state and currentBlob on props
            const sayingData = new FormData()
            sayingData.append("title", this.state.title)
            sayingData.append("description", this.state.description)
            sayingData.append("region", this.state.region)
            sayingData.append("tags", this.state.tags)
            sayingData.append("recording", this.props.blob)
    
            this.props.createSaying(sayingData)
                .then(() => {
                    this.props.history.push(`/regions/${this.state.region}`)
                })
            
        }


    }

    // recording methods
    startRecording = () => {    
        this.setState({
          record: !this.state.record
        });
      }
    
    stopRecording = () => {        
         this.setState({
           record: false
         });
       }

    onStop = (recordedBlob) =>  {
        const sound = new Pizzicato.Sound({
            source: 'file',
            options: { path: [recordedBlob.blobURL] }
        }, () => {
            this.props.addSayingRecording({sound: sound, blob: recordedBlob.blob})            
        });
    }

    playback = () => { 
        if (this.props.recording) {
            this.props.recording.play()
        }       
    }

    // tag methods
    addTag = (e) => {
        
        if (e.target.value === '') return;  

        const trimmedTag = `#${e.target.value.trim()}`

        if (!this.state.tags.includes(trimmedTag)) {
            let newTags = [...this.state.tags, trimmedTag]
            this.setState({
                tags: newTags
            })
        }
        // call updateTagValue again passing an empty string to reset the input
        this.updateTagValue('')
    }

    updateTagValue = (value) => {
        if(value === ' ') {
            return;
        } else {
            this.setState({
                tagsInputValue: value
            })
        }
    }

    removeTag = (removeTag) => {                      
        const filteredTags = this.state.tags.filter(tag => {
            return tag !== removeTag
        })        
        this.setState({
            tags: filteredTags
        })    
    }

    // modal
    closeModal = () => {       
        this.setState({
            modalOpen: false       
        })        
    }

    render() {   

        const inlineStyle = {
            modal : {
              marginTop: '118px !important',              
            }
          };
        const regionOptions = [
            {text: "Western", value: "Western"}, 
            {text: "Midwest", value: "Midwest"}, 
            {text: "Southern", value: "Southern"},
            {text: "Northeast", value: "Northeast"}
        ]

        return (
            <div className="margin-top">
                <Transition visible={true} transitionOnMount={true}>
                <Container>
                    <Header as='h2'>Make Some Slang</Header>
                    <Form>
                        <Form.Group widths="equal">
                            <Form.Input onChange={this.handleChange} 
                                value={this.state.title}                                 
                                name='title' 
                                label='Title' 
                                placeholder='Title'
                            />
                            <Form.Select onChange={this.handleChange} 
                                label="Region"                                 
                                placeholder="Select Region" 
                                options={regionOptions} 
                            />
                        </Form.Group>
                        <Form.TextArea onChange={this.handleChange} 
                            value={this.state.description}                             
                            name="description" 
                            label='Description' 
                            placeholder='Description in context...' 
                        />
                        <div>
                            <div>
                                {this.state.tags.map((tag, index) => {
                                    return <Button
                                                icon 
                                                labelPosition="right"                                                
                                                key={index}  
                                                onClick={(e) => this.removeTag(tag)}
                                            >
                                            {tag}
                                            <Icon name="delete" />
                                            </Button>
                                })}
                            </div>
                            <h3>Add location hashtags</h3>
                            <OnEvent space={this.addTag}>
                                <Input 
                                    value={this.state.tagsInputValue} 
                                    onChange={(e) => this.updateTagValue(e.target.value)} 
                                    placeholder="press space to enter"
                                    icon="hashtag"
                                    iconPosition="left"
                                />                                
                            </OnEvent>
                        </div>
                        <Modal dimmer={"inverted"} id="form-modal" style={inlineStyle.modal} centered size="mini" open={this.state.modalOpen}>                                    
                            <Modal.Header>Whoops!</Modal.Header>
                            <Modal.Content>
                                <p>Please enter a {this.state.modalMessage}</p>
                            </Modal.Content>
                            <Modal.Actions>                                    
                                <Button positive onClick={this.closeModal} icon='checkmark' labelPosition='right' content='Got it!' />
                            </Modal.Actions>                                    
                        </Modal>                                                    
                        <br />
                        <h4>Record</h4>
                        <br />
                        <ReactMic 
                            record={this.state.record}
                            className="sound-wave"
                            onStop={this.onStop}
                            strokeColor="#f48942"
                            nonstop='true'
                            duration={15}
                        />
                        <br/>
                        <Form.Group widths="equal">
                            <Form.Button
                                size="large"                                
                                positive
                                circular 
                                inverted
                                onClick={this.startRecording}
                                content="Start" 
                            />
                            <Form.Button 
                                size="large"                                
                                negative
                                circular
                                onClick={this.stopRecording}
                                content="Stop" 
                            />
                            <Form.Button 
                                size="large"                                 
                                color='blue'
                                circular
                                onClick={this.playback}
                                content="Playback" 
                            />
                        </Form.Group>
                        <br/>
                        <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>                                                
                    </Form>
                </Container>
                </Transition>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recording: state.currentRecording,
        blob: state.currentBlob
    }
}

export default connect(mapStateToProps, { createSaying, addSayingRecording, setPreviousPath })(NewSlangForm)