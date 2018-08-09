import { ADD_TO_CLIPBOARD } from '../actions/index'

export default (state = '', action) => {
    switch (action.type) {
        case ADD_TO_CLIPBOARD:
            return action.clipboard
        default:
            return state
    }
}
