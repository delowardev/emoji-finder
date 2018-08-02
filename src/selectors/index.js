
const getVisibleEmoji = (emoji, { 
    text = '', 
    category = ''
}) => (
    Object.entries(emoji).filter(single_emoji => {
        console.log(emoji)
        return true
        // let keywords = single_emoji[1].name
        // return keywords.toLowerCase().includes(text.toLowerCase())
    })
)

export default getVisibleEmoji