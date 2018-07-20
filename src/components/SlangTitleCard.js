import React from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { selectSaying } from '../actions/getSayings';

class SlangTitleCard extends React.Component {

    handleClick = () => {
        this.props.selectSaying(this.props.saying)
    }

    render() {
        const { saying } = this.props
        return (
            <div onClick={this.handleClick}>
                <Card color="orange">
                    <Card.Content textAlign="left" description={`${saying.votes} people are saying...`} />
                    <Card.Content content={`"${saying.title}"`}/>
                </Card>
            </div>
        )
    }
}

//when this card is clicked, dispatch an action that will update the state's selectedSaying

export default connect(null, { selectSaying })(SlangTitleCard)