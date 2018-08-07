import { FILTER_BY_TEXT, FILTER_BY_CATEGORY } from '../actions'

const defaultFilterState = {
    text: '',
    category: []
}

export default (state = defaultFilterState, action) => {
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