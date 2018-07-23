import React from 'react'

const Clip = (props) => {
    return (
        <div>
            <article>
                {/* how to use .setAttribute('controls') is jsx? */}
                <audio src={props.audio}></audio>
                <p>{props.label}</p>

            </article>           
        </div>
    )
}

export default Clip