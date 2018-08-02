import React from 'react'

const emoji = (props) => {
    let emojiData = props.emojiData[1],
        char = String.fromCodePoint(parseInt(props.emojiData[0], 16))

    return (
        <span 
            data-info={props.emojiData[0]}
            data-name={emojiData.name}
        >
            {char}
        </span>
    )
}

export default emoji