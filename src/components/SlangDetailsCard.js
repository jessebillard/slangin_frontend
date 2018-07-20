import React from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'semantic-ui-react';

const SlangDetailsCard = (props) => {

    // debugger;
    const { saying } = props
    return (
        <div>
            <Card>
                <Card.Content header={`"${saying.title}"`} />
                <Card.Content description={saying.description} />
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