import React from 'react';
import { Form, Input, Button, Icon, Transition } from 'semantic-ui-react';
import { Container, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createSaying, addSayingRecording } from '../actions/getSayings';
import OnEvent from 'react-onevent';
import Pizzicato from 'pizzicato'
import { ReactMic } from 'react-mic';

class NewSlangForm extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            region: '',
            record: false,
            tagsInputValue: '',
            tags: []           
        }
    }

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
        // console.log(this.state)
        // debugger;
        // will I still need this preventDefault if the submit is coming from a button click and not the "onSubmit" event?
        // apparently it works fine without it
        // e.preventDefault()

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

    startRecording = () => {
        // debugger;
        this.setState({
          record: !this.state.record
        });
      }
    
    stopRecording = () => {
        // debugger;
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
        this.props.recording.play()
    }

    addTag = (e) => {
        if (e.target.value === ' ') return;
        // trim the fat off the value
        const trimmedTag = `#${e.target.value.trim()}`
        // check to see if it exists in the array already with indexOf
            // if it doesn't exist already, call updatTag
        if (this.state.tags.indexOf(trimmedTag) < 0) {
            let newTags = [...this.state.tags, trimmedTag]
            this.updateTags(newTags)
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

    updateTags = (tags) => {
        this.setState({
            tags
        }, () => console.log(this.state))
    }

    removeTag = (removeTag) => {
        const filteredTags = this.state.tags.filter(tag => {
            return tag !== removeTag
        })
        // debugger;
        this.updateTags(filteredTags)
    }

    render() {   
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
                                                onClick={() => this.removeTag(tag)}
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
                                basic
                                positive
                                circular 
                                inverted
                                onClick={this.startRecording}
                                content="Start" 
                            />
                            <Form.Button 
                                size="large"
                                basic
                                negative
                                circular
                                onClick={this.stopRecording}
                                content="Stop" 
                            />
                            <Form.Button 
                                size="large"
                                basic 
                                color='blue'
                                circular
                                onClick={this.playback}
                                content="Playback" 
                            />

                        </Form.Group>
                        {/* <Form.Field 
                            onClick={this.startRecording}
                            control="input" 
                            type="button" 
                            label="Start"
                        />  */}
                        <br/>
                        <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>                                                
                    </Form>
                    {/* <section className="main-controls">
                        <div id="buttons">
                            <button onClick={this.startRecording} className="record">Start</button>
                            <button onClick={this.stopRecording} className="stop">Stop</button>
                            <button onClick={this.playback}>Playback</button>
                        </div>
                    </section> */}
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

export default connect(mapStateToProps, { createSaying, addSayingRecording })(NewSlangForm)