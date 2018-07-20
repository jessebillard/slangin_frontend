import React from 'react';
import SlangTitleCard from './SlangTitleCard';
import { Link } from 'react-router-dom';

const SlangList = ({region, sayings}) => {
    return (
        <div>
            <h1>What they're saying in the {region} region</h1>
                {sayings.map(saying => 
                    <Link to={`/regions/${region}/${saying.id}`} key={saying.id} >
                        <SlangTitleCard key={saying.id} saying={saying} />
                    </Link>
                )}
        </div>
    )
}

export default SlangList