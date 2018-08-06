import React from 'react'

const emoji = (props) => {
    let emoji_data = props.emojiData[1],
        code = props.emojiData[0],
        char = code.split('-').map(item => parseInt(item, 16)),
        name = emoji_data.name,
        category = emoji_data.category

    char = String.fromCodePoint(...char)
    
    return (
        <span
            className={`${name} ${category} code__${code}`}
        >
            {char}
        </span>
    )
}

export default emoji