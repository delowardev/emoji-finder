import React from 'react'

// key={emoji[1].code_points.base}
// char={String.fromCodePoint(parseInt(emoji[1].code_points.base, 16))}
// name={emoji[1].name}
// code = { emoji[1].code_points.base } 


const emoji = (props) => {
    let emojiData = props.emojiData[1],
        char = String.fromCodePoint(parseInt(emojiData.code_points.base, 16))
    return (
        <span>
            {char}
        </span>
    )
}

export default emoji