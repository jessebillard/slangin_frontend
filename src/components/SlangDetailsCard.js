import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Card, Button, Modal, Icon, Header, Accordion, Label } from 'semantic-ui-react';
// transition not working for some reason!
// import { Transition } from 'semantic-ui-react';
import { addVoteToSaying, getSayingRecording, getSayingTags, getAllSayingsFromTag, updateCurrentTag } from '../actions/getSayings';

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
        // fetch the tags from the backend!  
        this.props.getSayingTags(this.props.saying.title)

        this.props.getSayingRecording(this.props.saying)
    }

    playRecording = () => {
        this.props.recording.play()
    }

    // tagButtons = () => {
    //     this.props.tags.map(tag => {
    //         return <Button key={tag.id} content={tag.name}/>
    //     })
    // }

    handleTagClick = (e) => {
        // debugger
        // will send a request to the backend to get all sayings this tag has
        // the button should either use Link from react-router or do a history.push
        const tag = this.props.tags.find(tag => tag.name === e.target.innerText)
        
        this.props.getAllSayingsFromTag(tag.id)
        
        this.props.updateCurrentTag(tag)

    }

    render() {
        const { saying } = this.props   
        console.log(this.props.recording)  
        
        // const panel = {
        //     key: "panel",
        //     title: {
        //         content: <Label content="See location tags" />
        //     },
        //     content: {
        //         content: this.tagButtons()
        //     }
        // }

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
                                    open={this.state.modalOpen}
                                    onClose={this.handleClose}
                                    basic
                                    size="tiny"               
                                >
                                 <Header id="modal" icon='browser' content="Slangin'" />
                                    <Modal.Content>
                                        <h3>You and {saying.votes} other people are slangin' this phrase!</h3>
                                    </Modal.Content>
                                    <Modal.Actions>
                                    <Button color='green' onClick={this.handleClose} inverted>
                                        <Icon name='checkmark' /> Sick Yeah!
                                    </Button>
                                    </Modal.Actions>   
                                </Modal>                    
                            </div>
                        </Card.Content>
                    </Card>
                    <h3>Location Tags</h3>
                    {this.props.tags.map(tag => {
                        return <Link key={tag.id} to={`/tags/${tag.name.substr(1)}`}><Button key={tag.id} onClick={this.handleTagClick} content={tag.name} /></Link>
                    })}
                {/* </Transition.Group> */}
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        saying: state.selectedSaying,
        recording: state.sound,
        tags: state.currentTags
    }
}

export default withRouter(connect(mapStateToProps, { 
    addVoteToSaying, 
    getSayingRecording, 
    getSayingTags, 
    getAllSayingsFromTag,
    updateCurrentTag
} )(SlangDetailsCard))