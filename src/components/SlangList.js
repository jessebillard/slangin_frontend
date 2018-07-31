import React from 'react';
import SlangTitleCard from './SlangTitleCard';
import { Link } from 'react-router-dom';
import { List, Transition } from 'semantic-ui-react'

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

    // sayings divided by columns is how many rows are needed
    // const renderRows = () => {
    //     const rowCount = props.sayings.length
        
    // }

    // const renderColumnCards = (sayings) => {
    //     // pass in sorted sayings to make an individual card for each saying
    //     sayings.map((saying, index) => {
    //         return <Grid.Column key={index}>
    //                     <Link to={`/slang/${saying.id}`} key={saying.id} >
    //                         <SlangTitleCard key={saying.id} saying={saying} />
    //                     </Link>
    //                 </Grid.Column>
    //     })
    // }

    return (
        <Transition visible={true} transitionOnMount={true}>
        <div className="margin-top">
            {props.region ? <h2>What they're saying in the {props.region} region</h2> : <h2>Sayings using {props.tag.name} tag</h2>}
                <List horizontal size="large" celled={true}>
                    {sortedSayings().map((saying, index) => 
                        <List.Item key={index}>
                            <Link to={`/slang/${saying.id}`} key={saying.id} >
                                <SlangTitleCard key={saying.id} saying={saying} />
                            </Link>
                        </List.Item>
                    )}
                </List>                
        </div>
        </Transition>
    )
}

export default SlangList