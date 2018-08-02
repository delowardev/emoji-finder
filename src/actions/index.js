export const FILTER_BY_TEXT = 'FILTER_BY_TEXT'
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY'

export const setFilterText = text => ({
    type: FILTER_BY_TEXT,
    text
})