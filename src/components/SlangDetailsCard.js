import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Card, Button, Modal, Icon, Header, Divider, Segment } from 'semantic-ui-react';
// transition not working for some reason!
// import { Transition } from 'semantic-ui-react';
import { addVoteToSaying, getSayingRecording, getSayingTags, getAllSayingsFromTag, updateCurrentTag, clearCurrentTag } from '../actions/getSayings';

class SlangDetailsCard extends React.Component {

    constructor() {
        super()

        this.state = {
            modalOpen: false,
            prevPath: ''            
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
        this.props.getSayingTags(this.props.saying.id)
        this.props.getSayingRecording(this.props.saying)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            this.setState({ prevPath: this.props.location })
          }
    }

    playRecording = () => {
        this.props.recording.play()
    }

    onBackClick = (e) => {
        // debugger;
        if (e.target.innerText.includes("region")) {
            this.props.clearCurrentTag()
            this.props.history.push(`/regions/${this.props.saying.region.name}`)            
        } else {
            this.props.history.push(`/tags/${this.props.currentTag.name.substr(1)}`)
        }
    }

    btnColor = () => {
        switch (this.props.saying.region.name) {
            case "western":
                return "red"
            case "midwest":
                return "blue"
            case "southern":
                return "green"
            case "northeast":
                return "orange"
            default:
                return ''
        }
    }

    handleTagClick = (e) => {
        // debugger
        // will send a request to the backend to get all sayings this tag has
        // the button should either use Link from react-router or do a history.push
        const tag = this.props.tags.find(tag => tag.name === e.target.innerText)
        
        this.props.getAllSayingsFromTag(tag.id)
        
        this.props.updateCurrentTag(tag)

    }

    renderBackBtn = () => {
        return <h3>More from the <Button onClick={this.onBackClick} color={this.btnColor()} compact size="mini">
                { this.props.path.includes("tags") ? this.props.currentTag.name : this.props.saying.region.name}
            </Button>                                         
            { this.props.path.includes("tags") ? 'tag' : 'region...'}
        </h3>
    }

    backTagBtn = () => {
        return <div>
            <Button primary fluid onClick={this.onBackClick}>
                {this.props.currentTag.name} tag
            </Button>
            <Divider horizontal>Or</Divider>
        </div>
    }

    render() {
        const { saying } = this.props   

        const color = () => {
            switch (saying.region.name) {
                case "western":
                    return "red"
                case "midwest":
                    return "blue"
                case "southern":
                    return "green"
                case "northeast":
                    return "orange"
                default:
                    return "blue"
            }
        }

        return (
            <div className="margin-top" id="slang-details-card">
                {/* <Transition.Group animation="fade" duration={700}> */}
                    <Card color={color()}>
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
                    <h3>Location Tags</h3>
                    {this.props.tags.map(tag => {
                        return <Link key={tag.id} to={`/tags/${tag.name.substr(1)}`}><Button key={tag.id} onClick={this.handleTagClick} content={tag.name} /></Link>
                    })}
                {/* </Transition.Group> */}
                {/* {this.renderBackBtn()} */}
                <br />
                <h3>More from the...</h3>
                <Segment padded>  
                    { this.props.currentTag ? this.backTagBtn() : ''}                  
                    {/* <Button primary fluid>
                        {this.props.currentTag.name} tag
                    </Button>
                    <Divider horizontal>Or</Divider> */}
                    <Button onClick={this.onBackClick} color={"blue"} secondary fluid>
                        {this.props.saying.region.name} region
                    </Button>
                </Segment>
                {/* <h3>More from the <Button onClick={this.onBackClick} color={this.btnColor()} compact size="mini">
                        { this.props.path.includes("tags") ? this.props.currentTag : saying.region.name}
                    </Button>                                         
                    { this.props.path.includes("tags") ? '' : 'region...'}
                </h3> */}
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        saying: state.selectedSaying,
        recording: state.sound,
        tags: state.currentTags,
        currentTag: state.currentTag,
        path: state.containerPath
    }
}

export default withRouter(connect(mapStateToProps, { 
    addVoteToSaying, 
    getSayingRecording, 
    getSayingTags, 
    clearCurrentTag,
    getAllSayingsFromTag,
    updateCurrentTag
} )(SlangDetailsCard))