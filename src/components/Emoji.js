import React from 'react'
import skinTone from 'skin-tone'

const emoji = (props) => {
    let emoji_data = props.emojiData[1],
        char = String.fromCodePoint(parseInt(emoji_data.code_points.base, 16)),
        name = emoji_data.name,
        skin_tone = name.includes(':') ? name.split(':')[1].trim().replace(/ /g, '-') : false


        switch (skin_tone) {
            case 'light-skin-tone':
                    char = skinTone(char, 1)
                break;
            case 'medium-light-skin-tone': 
                    char = skinTone(char, 2)
                break;
            case 'medium-skin-tone': 
                    char = skinTone(char, 3)
                break;
            case 'medium-dark-skin-tone': 
                    char = skinTone(char, 4)
                break;
            case 'dark-skin-tone': 
                    char = skinTone(char, 5)
                break;
            default:
                    char = skinTone(char, 0)
                break;
        }
    
    return (
        <span 
            data-info={props.emojiData[0]}
            data-name={name}
            data-skin_tone={skin_tone}
        >
            {char}
        </span>
    )
}

export default emoji