import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCategory, filterByCategory } from '../actions'

class Category extends Component {
    state = {
        categories: [],
        category_filter: [],
        all_emoji: Object.entries(this.props.emoji)
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
        if (this.state.category_filter.length > 0 && this.state.category_filter.includes(e.target.value)) {
            this.props.filterByCategory(this.state.category_filter.filter(item => item !== e.target.value))
        } else {
            this.state.category_filter.push(e.target.value)
            this.props.filterByCategory(this.state.category_filter)
        }
    }

    handleOnAllClick = (e) => {
        if (this.state.category_filter.length < this.state.categories.length) {
            this.props.filterByCategory(this.state.categories)
            e.target.className = 'active'
        } else {
            this.props.filterByCategory([])
            e.target.className = ''
        }
    }

    render() {
        return (
            <div className="category_list">
                <h5>Category</h5>
                <ul>
                    <li>
                        <button
                            onClick={this.handleOnAllClick}
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
    category_filter: state.filterEmoji.category
})

export default connect(mapStateToProps, {addCategory, filterByCategory})(Category)


