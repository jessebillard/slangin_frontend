import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import SlangList from '../components/SlangList';

class SlangContainer extends React.Component {

    render() {
        return (
            <div>
                <Switch>                
                    <Route path={`/regions/${this.props.region}`} render={() => {
                        return <SlangList region={this.props.region} sayings={this.props.sayings} />
                    }} />
                </Switch>                
            </div>            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sayings: state.sayings,
        region: state.selectedRegion
    }
}

export default connect(mapStateToProps)(SlangContainer)
