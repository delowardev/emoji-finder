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


// import store from '../store'
// const emoji = Object.entries(store.getState().emojiReducer),
//     categories = []

// emoji.map(item => {
//     const category = item[1].category
//     if (!categories.includes(category)) {
//         categories.push(category)
//     }
// })
