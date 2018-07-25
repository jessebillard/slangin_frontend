import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { getSayings, getAllRegions } from '../actions/getSayings'

class HomePage extends React.Component {

    handleClick = (e) => {
        const region = e.target.innerText
        this.props.getSayings(region)
    }

    componentDidMount() {
        this.props.getAllRegions()
    }

    render() {
        return (
            <div className="margin-top">
                <h1>Slangin'</h1>
                <br/>
                <Link to="/regions/western" >
                    <Button onClick={this.handleClick} content='Western' color="orange" />            
                </Link>
                <Link to="/regions/midwest" >
                    <Button onClick={this.handleClick} content='Midwest' color="olive" />                
                </Link>
                <Link to="/regions/southern" >
                    <Button onClick={this.handleClick} content='Southern' color="teal"/>                
                </Link>
                <Link to="/regions/northeast" >
                    <Button onClick={this.handleClick} content='Northeast' color="violet" />                
                </Link>
            </div>
        )
    }
}



export default connect(null, { getAllRegions, getSayings })(HomePage)
