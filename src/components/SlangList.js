import React from 'react';
import SlangTitleCard from './SlangTitleCard';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react'

const SlangList = ({region, sayings}) => {

    // const columns = _.times(4, i => (
    //     <Grid.Column key={i}>
    //       {/* <Image src='/images/wireframe/image.png' /> */}
    //         {/* {titleCards[i]} */}

    //     </Grid.Column>
    //   ))

    // const titleCards = sayings.map(saying => 
    //     <Link to={`/slang/${saying.id}`} key={saying.id} >
    //         <SlangTitleCard key={saying.id} saying={saying} />
    //     </Link>
    // )

    // console.log(titleCards)

    return (
        <div className="margin-top">
            <h1>What they're saying in the {region} region</h1>
                <Grid columns={4} divided >
                    <Grid.Row>
                        {sayings.map(saying => 
                        <Grid.Column key={saying.id}>
                            <Link to={`/slang/${saying.id}`} key={saying.id} >
                                <SlangTitleCard key={saying.id} saying={saying} />
                            </Link>
                        </Grid.Column>
                    )}
                    </Grid.Row>
                </Grid>
                {/* {sayings.map(saying => 
                    <Link to={`/slang/${saying.id}`} key={saying.id} >
                        <SlangTitleCard key={saying.id} saying={saying} />
                    </Link>
                )} */}
        </div>
    )
}

export default SlangList