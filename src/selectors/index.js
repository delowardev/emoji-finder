
const getVisibleEmoji = (emoji, { 
    text = '', 
    category = ''
}) => (
    emoji.filter(single_emoji => {
        let keywords = single_emoji[1].name
        return text ? keywords.toLowerCase().includes(text.toLowerCase()) : true
    })
)

export default getVisibleEmoji