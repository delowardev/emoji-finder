import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCategory, filterByCategory } from '../actions'

class Category extends Component {
    state = {
        categories: this.props.categories,
        category_filter: this.props.category_filter.category
    }


    componentWillMount = () => {
        this.props.filterByCategory(Object.keys(this.state.categories))
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
        if (this.state.category_filter.length < Object.keys(this.state.categories).length) {
            this.props.filterByCategory(Object.keys(this.state.categories))
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
                                Object.keys(this.state.categories).length === this.state.category_filter.length ? 'active' : ''
                            }
                        >
                            All Emoji
                            <span>
                                {Object.entries(this.state.categories).reduce((sum, subarr) => sum + subarr[1].length ,0)}
                            </span>
                        </button>
                    </li>
                    {
                        Object.entries(this.state.categories).map(category => (
                            <li
                                key={category[0]}
                            >
                                <button
                                    onClick={this.handleOnClick}
                                    value={category[0]}
                                    className={this.state.category_filter.includes(category[0]) ? 'active' : ''}
                                >
                                    {category[0]} <span>{category[1].length}</span>
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
    category_filter: state.filterEmoji
})

export default connect(mapStateToProps, {addCategory, filterByCategory})(Category)


