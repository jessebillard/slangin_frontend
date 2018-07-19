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
    // mapStateToProps so that whatever region is selected can be fetched from backend
    //