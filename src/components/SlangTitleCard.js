import React from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { selectSaying } from '../actions/getSayings';

class SlangTitleCard extends React.Component {

    constructor() {
        super()

        this.state = {
            mouseHover: false
        }

    }

    handleClick = () => {
        this.props.selectSaying(this.props.saying)
    }

    raiseCard = () => {
        // console.log("enter")
        this.setState({
            mouseHover: !this.state.mouseHover
        })
    }

    lowerCard = () => {
        // console.log("leave")
        this.setState({
            mouseHover: !this.state.mouseHover
        })
    }

    render() {
        // console.log(this.props)
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
            <div onMouseEnter={this.raiseCard} onMouseLeave={this.lowerCard} onClick={this.handleClick}>
                <Card raised={this.state.mouseHover} color={color()}>
                    <Card.Content textAlign="left" description={`${saying.votes} people are saying...`} />
                    <Card.Content content={`"${saying.title}"`}/>
                </Card>
            </div>
        )
    }
}

export default connect(null, { selectSaying })(SlangTitleCard)