import { combineReducers } from 'redux'
import emojiReducer from './emoji'
import filterEmoji from './filters'
import categories from './category'
import clipboard from './clipboard'

const rootReducer = combineReducers({
    emojiReducer,
    filterEmoji,
    categories,
    clipboard
})

export default rootReducer