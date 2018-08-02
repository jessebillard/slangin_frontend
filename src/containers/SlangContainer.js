import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import SlangList from '../components/SlangList';
import { updateContainerPath, clearCurrentTag } from '../actions/getSayings'

class SlangContainer extends React.Component {

    componentDidMount() {
        // update redux state to have the containerPath
        this.props.updateContainerPath(this.props.history.location.pathname)

        window.onpopstate = () => {
            console.log("hit the pop state event")
            switch (this.props.prevPath) {
                case "/newslang":
                    return ''
                    // this.props.clearCurrentTag()                    
                case "/about":
                    return ''   
                default:
                    return ''             
                    // this.props.clearCurrentTag()
            }
        }
    }

    render() {
        return (
            <div>
                <Switch>    
                    {/* route for rendering a slang list based of tag not region, so don't pass it a region  */}
                    <Route path={`/tags/:tagname`} render={() => {                        
                        return <SlangList tag={this.props.tag} sayings={this.props.tagSayings} />
                    }}/>
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
        region: state.selectedRegion,
        tag: state.currentTag,
        tagSayings: state.sayingsBelongingToTag,
        prevPath: state.previousPath
    }
}

export default withRouter(connect(mapStateToProps, { updateContainerPath, clearCurrentTag })(SlangContainer))
