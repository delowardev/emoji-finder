import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCategory, filterByCategory } from '../actions'
import _ from 'lodash'

class Category extends Component {
    state = {
        categories: this.props.categories,
        category_filter: this.props.category_filter.category,
        all_emoji: Object.entries(this.props.emoji)
    }

    componentWillMount = () => {
        let categories = []
        this.state.all_emoji.map(emoji => {
            let category = emoji[1].category
            if (!categories.includes(category)) {
                categories.push(category)
            }
            return false
        })

        this.props.addCategory(categories)
        this.props.filterByCategory(categories)

    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            categories: nextProps.categories,
            category_filter: nextProps.category_filter.category
        })
    }

    handleOnClick = (e) => {
        if (this.state.category_filter.includes(e.target.value)) {
            this.props.filterByCategory(this.state.category_filter.filter(cat => cat !== e.target.value))
        } else {
            let current_cat = this.state.category_filter
            current_cat.push(e.target.value)
            this.props.filterByCategory(current_cat)
        }
    }

    handleOnAllClick = (e) => {
        if (this.state.category_filter.length < this.state.categories.length) {
            this.props.filterByCategory(this.state.categories)
        } else {
            this.props.filterByCategory([])
        }
    }

    render() {
        return (
            <div className="category_list sidebar_item">
                <h3>Category</h3>
                <ul>
                    <li>
                        <button
                            onClick={this.handleOnAllClick}
                            className={
                                _.isEqual(this.state.categories, this.state.category_filter) ? 'active' : ''
                            }
                        >
                            All Emoji <span>{this.state.all_emoji.length}</span>
                        </button>
                    </li>
                    {
                        this.state.categories.map(category => (
                            <li
                                key={category}
                            >
                                <button
                                    onClick={this.handleOnClick}
                                    value={category}
                                    className={this.state.category_filter.includes(category) ? 'active' : ''}
                                >
                                    {category} <span>{this.state.all_emoji.filter(emoji => emoji[1].category === category).length}</span>
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
    category_filter: state.filterEmoji
})

export default connect(mapStateToProps, {addCategory, filterByCategory})(Category)


