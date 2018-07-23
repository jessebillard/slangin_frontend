import React from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'semantic-ui-react';
import { addVoteToSaying } from '../actions/getSayings'

class SlangDetailsCard extends React.Component {
    // constructor() {
    //     super()
    // }
    // debugger;

    handleVote = (saying) => {
        // debugger;
        this.props.addVoteToSaying(saying, saying.id)
    }

    render() {
        const { saying } = this.props
        // console.log(saying)
        return (
            <div>
                <Card>
                    <Card.Content header={`"${saying.title}"`} />
                    <Card.Content description={saying.description} />
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button inverted color="blue" circular icon="play circle outline" />                        
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
        saying: state.selectedSaying
    }
}

export default connect(mapStateToProps, { addVoteToSaying } )(SlangDetailsCard)