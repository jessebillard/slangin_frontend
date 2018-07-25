import React from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'semantic-ui-react';
// transition not working for some reason!
// import { Transition } from 'semantic-ui-react';
import { addVoteToSaying, getSayingRecording } from '../actions/getSayings';

class SlangDetailsCard extends React.Component {

    handleVote = (saying) => {
        this.props.addVoteToSaying(saying, saying.id)
    }

    componentDidMount() {        
        this.props.getSayingRecording(this.props.saying)
    }

    playRecording = () => {
        this.props.recording.play()
    }

    render() {
        const { saying } = this.props        
        return (
            <div className="margin-top" id="slang-details-card">
                {/* <Transition.Group animation="fade" duration={700}> */}
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
                {/* </Transition.Group> */}
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