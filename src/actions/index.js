
export const FILTER_BY_TEXT = 'FILTER_BY_TEXT'
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY'
export const ADD_CATEGORY = 'ADD_CATEGORY'
export const ADD_TO_CLIPBOARD = 'ADD_TO_CLIPBOARD'
export const CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE'

export const setFilterText = text => ({
    type: FILTER_BY_TEXT,
    text
})

export const filterByCategory = category => ({
    type: FILTER_BY_CATEGORY,
    category
})

export const addCategory = categories => ({
    type: ADD_CATEGORY,
    categories
})

export const addToClipboard = clipboard => ({
    type: ADD_TO_CLIPBOARD,
    clipboard
})

export const changeFontSize = fontSize => ({
    type: CHANGE_FONT_SIZE,
    fontSize
})