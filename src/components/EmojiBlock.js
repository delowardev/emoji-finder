import React, { Component } from 'react'
import { connect } from 'react-redux'
import Emoji from './Emoji'

class EmojiBlock extends Component {
    state = {
        categories: this.props.categories,
        catgory_filter: this.props.filter_emoji.category
    }

    componentWillReceiveProps = nextProps => {
        this.setState({
            catgory_filter: nextProps.filter_emoji.category
        })
    }

    visibleEmoji = () => Object.keys(this.state.categories).filter(item => this.state.catgory_filter.includes(item))
    uiqueID = () => Math.random().toString(36).substr(2, 9)

    render() {
        return (
            this.visibleEmoji().map(category => (
                <div
                    id={category}
                    key={category}
                    className="emoji_block"
                >
                    <h3> {category} <i>({this.state.categories[category].length})</i></h3>
                    <div className="emoji_block_inner">
                        {
                            this.state.categories[category].map(emoji => (
                                <Emoji
                                    key={emoji[0] + '_' + this.uiqueID()}
                                    emojiData={emoji}
                                />
                            ))
                        }
                    </div>
                </div>
            ))
        )
    }
}

const mapStateToProps = state => ({
    filter_emoji: state.filterEmoji,
    categories: state.categories
})

export default connect(mapStateToProps) (EmojiBlock)