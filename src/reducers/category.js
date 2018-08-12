import { ADD_CATEGORY } from '../actions'
import emoji from '../emoji/emoji.min.json'
import {getEmojiByCategory} from '../selectors'

const emojies = Object.entries(emoji) 

const categories = {
    people: getEmojiByCategory(emojies, 'people'),
    nature: getEmojiByCategory(emojies, 'nature'),
    food: getEmojiByCategory(emojies, 'food'),
    activity: getEmojiByCategory(emojies, 'activity'),
    travel: getEmojiByCategory(emojies, 'travel'),
    objects: getEmojiByCategory(emojies, 'objects'),
    symbols: getEmojiByCategory(emojies, 'symbols'),
    flags: getEmojiByCategory(emojies, 'flags')
}

export default (state = categories, action) => {
    switch (action.type) {
        case ADD_CATEGORY:
            return action.categories
        default:
            return state;
    }
}