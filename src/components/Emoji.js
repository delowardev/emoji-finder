import React from 'react'

const Emoji = (props) => {
    let emoji_data = props.emojiData[1],
        code = props.emojiData[0],
        char = code.split('-').map(item => parseInt(item, 16)),
        name = emoji_data.name,
        category = emoji_data.category

    char = String.fromCodePoint(...char)

    const handleOnClick = e => {
        console.log(char)
    }
    
    return (
        <span
            className={`${name} ${category} code__${code}`}
            onClick={handleOnClick}
            emoji_char={char}
        >
            {char}
        </span>
    )
}

// const Emoji = (props) => {
//     let emoji_data = props.emojiData[1],
//         code = props.emojiData[0],
//         char = code.split('-').map(item => parseInt(item, 16)),
//         name = emoji_data.name,
//         category = emoji_data.category

//     char = String.fromCodePoint(...char)

//     const handleOnClick = e => {
//         console.log(char)
//     }
    
//     return (
//         <span
//             className={`${name} ${category} code__${code}`}
//             onClick={handleOnClick}
//             emoji_char={char}
//         >
//             {char}
//         </span>
//     )
// }

export default Emoji