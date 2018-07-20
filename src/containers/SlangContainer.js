import React from 'react';

class SlangContainer extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                {/* header of the selected region */}
                {/* render out SlangTitleCards for each saying of that region */}
            </div>
        )
    }
}

export default SlangContainer

// SlangContainer will be connected to redux
    // mapStateToProps so that you can iterate through the selected region's sayings, making titleCards for each