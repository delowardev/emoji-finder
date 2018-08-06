
const getVisibleEmoji = (emoji, { 
    text = '', 
    category = ''
}) => (
    emoji.filter(single_emoji => {
        let keywords = single_emoji[1].name,
            filter_text = text ? keywords.toLowerCase().includes(text.toLowerCase()) : true,
            filter_cat = category ? category === single_emoji[1].category : true
        return filter_text && filter_cat
    })
)

export default getVisibleEmoji