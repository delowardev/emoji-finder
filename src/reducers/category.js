import { ADD_CATEGORY } from '../actions'
const categories = []

export default (state = categories, action) => {
    switch (action.type) {
        case ADD_CATEGORY:
            return action.categories
        default:
            return state;
    }
}