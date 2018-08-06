
export const FILTER_BY_TEXT = 'FILTER_BY_TEXT'
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY'
export const ADD_CATEGORY = 'ADD_CATEGORY'

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