import React from 'react';
import { Form } from 'semantic-ui-react';
import { Container, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createSaying, addSayingRecording } from '../actions/getSayings';
import Pizzicato from 'pizzicato'
import { ReactMic } from 'react-mic';

class NewSlangForm extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            region: '',
            record: false           
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
        e.preventDefault()

        // make a formData object out of the current state and currentBlob on props
        const sayingData = new FormData()
        sayingData.append("title", this.state.title)
        sayingData.append("description", this.state.description)
        sayingData.append("region", this.state.region)
        sayingData.append("recording", this.props.blob)

        this.props.createSaying(sayingData)
            .then(() => {
                this.props.history.push(`/regions/${this.state.region}`)
            })
    }

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
        this.props.recording.play()
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
                <Container>
                    <Header as='h2'>Make Some Slang</Header>
                    <Form onSubmit={this.handleSubmit} >
                        <Form.Group widths="equal">
                            <Form.Input onChange={this.handleChange} value={this.state.title} name='title' label='Title' placeholder='Title'/>
                            <Form.Select onChange={this.handleChange} label="Region" placeholder="Select Region" options={regionOptions} />
                        </Form.Group>
                        <Form.TextArea onChange={this.handleChange} value={this.state.description} name="description" label='Description' placeholder='Description in context...' />
                        <br />
                        <Form.Button>Submit</Form.Button>                                                
                    </Form>
                    <h4>Record</h4>
                    <ReactMic 
                    record={this.state.record}
                    className="sound-wave"
                    onStop={this.onStop}
                    strokeColor="#f48942"
                    nonstop='true'
                    duration={15}
                    />
                    <section className="main-controls">
                        <div id="buttons">
                            <button onClick={this.startRecording}className="record">Start</button>
                            <button onClick={this.stopRecording} className="stop">Stop</button>
                            <button onClick={this.playback}>Playback</button>
                        </div>
                    </section>
                </Container>
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