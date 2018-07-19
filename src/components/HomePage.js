import React from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { getSayings } from '../actions/getSayings'

class HomePage extends React.Component {

    handleClick = (e) => {
        const region = e.target.innerText
        this.props.getSayings(region)
        // debugger;
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Slangin'</h1>
                <br/>
                <Button onClick={this.handleClick} content='West' primary />
                <Button onClick={this.handleClick} content='Midwest' primary />
                <Button onClick={this.handleClick} content='South' primary />
                <Button onClick={this.handleClick} content='Northeast' primary />
            </div>
        )
    }
}



export default connect(null, { getSayings })(HomePage)

// connect this component to redux
    // have click handlers that're able to dispatch an action that will then update the redux state to have a selected region...then this fires a fetch to the backend to get all the sayings from that region
    // 