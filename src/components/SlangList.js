import React from 'react';
import SlangTitleCard from './SlangTitleCard';
import { Link } from 'react-router-dom';
import { List, Transition } from 'semantic-ui-react'

const SlangList = (props) => {

    const sortedSayings = () => {        
        const sayingsCopy = [...props.sayings]
        const newSayings = sayingsCopy.sort((a, b) => {
           return a.votes - b.votes
        })
        return newSayings.reverse()
    }

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