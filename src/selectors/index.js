export const getEmojiByCategory = (emojies, category) => (
    emojies.filter(item => {
        // let tone = ['1f3fb', '1f3fc', '1f3fd', '1f3fe', '1f3ff'],
        //     code_arr = item[1].code_points.base,
        //     has_tone = tone.filter(t => code_arr.includes(t))
        return item[1].category === category // && !has_tone.length
    })
)


const getVisibleEmoji = (emoji, { text = '' }) => (
    emoji.filter(single_emoji => {
        let keywords = single_emoji[1].name + ' ' + single_emoji[1].keywords.join('') + ' ' + single_emoji[1].category
        return text ? keywords.toLowerCase().includes(text.toLowerCase()) : true
    })
)

export default getVisibleEmoji