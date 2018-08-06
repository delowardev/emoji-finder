import { combineReducers } from 'redux'
import emojiReducer from './emoji'
import filterEmoji from './filters'
import categories from './category'

const rootReducer = combineReducers({
    emojiReducer,
    filterEmoji,
    categories
})

export default rootReducer