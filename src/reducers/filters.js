import { FILTER_BY_TEXT, FILTER_BY_CATEGORY, CHANGE_FONT_SIZE } from '../actions'

const defaultFilterState = {
    text: '',
    category: [],
    font_size: 25,
    skinTone: 'light'
}

export default (state = defaultFilterState, action) => {
    switch (action.type) {
        case FILTER_BY_TEXT:
            return {
                ...state,
                text: action.text
            }
        case CHANGE_FONT_SIZE:
            return {
                ...state,
                font_size: action.font_size
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