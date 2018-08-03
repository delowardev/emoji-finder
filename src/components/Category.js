import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCategory, filterByCategory } from '../actions'

class Category extends Component {
    state = {
        categories: [],
        category_filter: ''
    }

    componentWillMount = () => {
        let categories = []
        Object.entries(this.props.emoji).map(emoji => {
            let category = emoji[1].category
            if (!categories.includes(category)) {
                categories.push(category)
            }
            return false
        })

        this.props.addCategory(categories)
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            categories: nextProps.categories,
            category_filter: nextProps.category_filter
        })
    }

    handleOnClick = (e) => {
        e.target.value === this.state.category_filter ? this.props.filterByCategory('') : this.props.filterByCategory(e.target.value)
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.categories.map(category => (
                            <li
                                key={category}
                            >
                                <button
                                    onClick={this.handleOnClick}
                                    value={category}
                                    className={
                                        category === this.state.category_filter ? 'active' : ''
                                    }
                                >
                                    {category}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    categories: state.categories,
    emoji: state.emojiReducer,
    category_filter: state.filterEmoji.category
})

export default connect(mapStateToProps, {addCategory, filterByCategory})(Category)


