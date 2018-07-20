import React from 'react';
import { connect } from 'react-redux';
import SlangTitleCard from '../components/SlangTitleCard';


class SlangContainer extends React.Component {
    constructor() {
        super()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>What they're saying in the {this.props.region} region</h1>
                {/* render out SlangTitleCards for each saying of that region */}
                {this.props.sayings.map(saying => 
                    <SlangTitleCard key={saying.id} saying={saying} />
                )}
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