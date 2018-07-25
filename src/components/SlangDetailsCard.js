import React from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'semantic-ui-react';
import { addVoteToSaying } from '../actions/getSayings';
import { getSayingRecording } from '../actions/getSayings';

class SlangDetailsCard extends React.Component {
    // constructor() {
    //     super()
    // }
    // debugger;

    handleVote = (saying) => {
        // debugger;
        this.props.addVoteToSaying(saying, saying.id)
    }

    componentDidMount() {
        // console.log(this.props.saying)
        this.props.getSayingRecording(this.props.saying)
    }

    playRecording = (saying) => {
        this.props.recording.play()
        
        // const sound = new Pizzicato.Sound({
        //     source: 'file',
        //     options: { path: [recordedBlob.blobURL] }
        // }, () => {
        //     this.props.addSayingRecording({sound: sound, blob: recordedBlob.blob})
        // });
    }

    render() {
        const { saying } = this.props
        // console.log(saying)
        return (
            <div className="margin-top" id="slang-details-card">
                <Card>
                    <Card.Content header={`"${saying.title}"`} />
                    <Card.Content description={saying.description} />
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button inverted onClick={() => this.playRecording(saying)} color="blue" circular icon="play circle outline" />                        
                            <Button inverted onClick={() => this.handleVote(saying)} color="orange" circular content="I say this too!" />  
                        </div>
                    </Card.Content>
                </Card>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        saying: state.selectedSaying,
        recording: state.sound
    }
}

export default connect(mapStateToProps, { addVoteToSaying, getSayingRecording } )(SlangDetailsCard)