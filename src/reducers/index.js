import emoji from '../emoji/emoji.main.json'
import { FILTER_BY_TEXT, FILTER_BY_CATEGORY } from '../actions';
import { combineReducers } from 'redux';

const defaultFilterState = {
    text: '',
    category: 'face'
}

const emojiReducer = (state = emoji, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const filterEmoji = (state = defaultFilterState, action) => {
    switch (action.type) {
        case FILTER_BY_TEXT:
            return {
                ...state,
                text: action.text
            }
        case FILTER_BY_CATEGORY:
            return {
                ...state,
                category: action.category
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    emojiReducer,
    filterEmoji
})

export default rootReducer