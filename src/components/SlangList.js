import React from 'react';
import SlangTitleCard from './SlangTitleCard';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react'

const SlangList = (props) => {

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

    const sortedSayings = () => {
        // console.log(props.sayings)
        const sayingsCopy = [...props.sayings]
        const newSayings = sayingsCopy.sort((a, b) => {
           return a.votes - b.votes
        })
        return newSayings.reverse()
    }

    return (
        <div className="margin-top">
        {props.region ? <h1>What they're saying in the {props.region} region</h1> : <h1>Sayings using {props.tag.name} tag</h1>}
                <Grid columns={4} divided >
                    <Grid.Row key={"row 1"}>
                        {sortedSayings().map((saying, index) => 
                        <Grid.Column key={index}>
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