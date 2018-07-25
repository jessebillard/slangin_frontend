import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { getSayings } from '../actions/getSayings'
import { getAllRegions } from '../actions/getSayings'

class HomePage extends React.Component {

    handleClick = (e) => {
        const region = e.target.innerText
        this.props.getSayings(region)
    }

    componentDidMount() {
        this.props.getAllRegions()
    }

    render() {
        // console.log(this.props)
        return (
            <div className="margin-top">
                <h1>Slangin'</h1>
                <br/>
                <Link to="/regions/western" >
                    <Button onClick={this.handleClick} content='Western' primary />            
                </Link>
                <Link to="/regions/midwest" >
                    <Button onClick={this.handleClick} content='Midwest' primary />                
                </Link>
                <Link to="/regions/southern" >
                    <Button onClick={this.handleClick} content='Southern' primary />                
                </Link>
                <Link to="/regions/northeast" >
                    <Button onClick={this.handleClick} content='Northeast' primary />                
                </Link>
            </div>
        )
    }
}



export default connect(null, { getAllRegions, getSayings })(HomePage)

// connect this component to redux
    // have click handlers that're able to dispatch an action that will then update the redux state to have a selected region...then this fires a fetch to the backend to get all the sayings from that region
    // 