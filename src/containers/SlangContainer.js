import React from 'react';
import { connect } from 'react-redux';
// import SlangTitleCard from '../components/SlangTitleCard';
import SlangList from '../components/SlangList';
import { Route, Switch } from 'react-router-dom';
// import SlangDetailsCard from '../components/SlangDetailsCard';


class SlangContainer extends React.Component {
    // constructor() {
    //     super()
    // }

    render() {
        // console.log(this.props)
        return (
            <div>
                <Switch>
                    {/* <Route path={'/slang/:sayingId'} component={SlangDetailsCard} /> */}
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

// SlangContainer will be connected to redux
    // mapStateToProps so that you can iterate through the selected region's sayings, making titleCards for each