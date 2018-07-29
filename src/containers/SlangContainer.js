import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import SlangList from '../components/SlangList';
import { updateContainerPath } from '../actions/getSayings'

class SlangContainer extends React.Component {

    componentDidMount() {
        // update redux state to have the containerPath
        this.props.updateContainerPath(this.props.history.location.pathname)
        // console.log(this.props.history.location.pathname)
    }

    render() {
        return (
            <div>
                <Switch>    
                    {/* route for rendering a slang list based of tag not region, so don't pass it a region  */}
                    <Route path={`/tags/:tagname`} render={() => {
                        // console.log("tag path")
                        return <SlangList tag={this.props.tag} sayings={this.props.tagSayings} />
                    }}/>
                    <Route path={`/regions/${this.props.region}`} render={() => {
                        // console.log("region path")
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
        region: state.selectedRegion,
        tag: state.currentTag,
        tagSayings: state.sayingsBelongingToTag
    }
}

export default withRouter(connect(mapStateToProps, { updateContainerPath })(SlangContainer))
