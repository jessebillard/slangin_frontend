import React from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { selectSaying } from '../actions/getSayings';

class SlangTitleCard extends React.Component {

    handleClick = () => {
        this.props.selectSaying(this.props.saying)
    }

    render() {
        // console.log(this.props)
        const { saying } = this.props
        const color = () => {
            switch (saying.region.name) {
                case "western":
                    return "orange"
                case "midwest":
                    return "olive"
                case "southern":
                    return "teal"
                case "northeast":
                    return "violet"
                default:
                    return "blue"
            }

        }
        return (
            <div onClick={this.handleClick}>
                <Card color={color()}>
                    <Card.Content textAlign="left" description={`${saying.votes} people are saying...`} />
                    <Card.Content content={`"${saying.title}"`}/>
                </Card>
            </div>
        )
    }
}

export default connect(null, { selectSaying })(SlangTitleCard)