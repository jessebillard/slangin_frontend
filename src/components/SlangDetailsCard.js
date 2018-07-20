import React from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'semantic-ui-react';

const SlangDetailsCard = () => {
    // debugger;
    return (
        <div>
            <Card>
                <Card.Content header='Slang Title' />
                <Card.Content description="Description of the Slang" />
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button inverted color="blue" circular icon="play circle outline" />                        
                        <Button inverted color="orange" circular content="I say this too!" />  
                    </div>
                </Card.Content>
            </Card>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        saying: state.selectedSaying
    }
}

export default connect(mapStateToProps)(SlangDetailsCard)