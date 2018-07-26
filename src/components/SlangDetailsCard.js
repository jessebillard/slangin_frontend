import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Button, Modal, Icon, Header } from 'semantic-ui-react';
// transition not working for some reason!
// import { Transition } from 'semantic-ui-react';
import { addVoteToSaying, getSayingRecording } from '../actions/getSayings';

class SlangDetailsCard extends React.Component {

    constructor() {
        super()

        this.state = {
            modalOpen: false            
        }
    }

    handleVote = (saying) => {
        this.setState({
            modalOpen: true
        })
        this.props.addVoteToSaying(saying, saying.id)
    }

    handleClose = () => {
        this.setState({
            modalOpen: false
        })
    }

    componentDidMount() {        
        this.props.getSayingRecording(this.props.saying)
    }

    playRecording = () => {
        this.props.recording.play()
    }

    onBackClick = () => {
        this.props.history.goBack()
    }

    btnColor = () => {
        switch (this.props.saying.region.name) {
            case "western":
                return "orange"
            case "midwest":
                return "olive"
            case "southern":
                return "teal"
            case "northeast":
                return "violet"
            default:
                return ''
        }
    }

    render() {
        console.log(this.props)
        const { saying } = this.props
            
        return (
            <div className="margin-top" id="slang-details-card">
                {/* <Transition.Group animation="fade" duration={700}> */}
                    <Card>
                        <Card.Content header={`"${saying.title}"`} />
                        <Card.Content description={saying.description} />
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button inverted 
                                    onClick={() => this.playRecording(saying)} 
                                    color="blue" 
                                    circular 
                                    icon="play circle outline" 
                                />    
                                <Modal
                                    trigger={<Button 
                                        inverted 
                                        onClick={() => this.handleVote(saying)} 
                                        color="orange" 
                                        circular 
                                        content="I say this too!" 
                                    /> }
                                    dimmer={"blurring"}
                                    open={this.state.modalOpen}
                                    onClose={this.handleClose}
                                    basic
                                    size="tiny"                                                   
                                >
                                 <Header id="header" icon='browser' content="Slangin'" />
                                    <Modal.Content id="modal-content">
                                        <h3>You and {saying.votes} other people are slangin' this phrase!</h3>
                                    </Modal.Content>
                                    <Modal.Actions>
                                    <Button id="modal-btn" color='green' onClick={this.handleClose} inverted>
                                        <Icon name='checkmark' /> Sick Yeah!
                                    </Button>
                                    </Modal.Actions>   
                                </Modal>                    
                                 
                            </div>
                        </Card.Content>
                    </Card>
                {/* </Transition.Group> */}
                <h3>More from the <Button onClick={this.onBackClick} color={this.btnColor()} compact size="mini">
                        {saying.region.name}
                    </Button>                                         
                    region...
                </h3>
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