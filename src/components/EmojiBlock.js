import React, { Component } from 'react'
import { connect } from 'react-redux'
import Emoji from './Emoji'

class EmojiBlock extends Component {
    state = {
        categories: this.props.filter_emoji.category,
        emoji: this.props.emoji
    }

    componentWillReceiveProps = nextProps => {
        this.setState({
            categories: nextProps.filter_emoji.category,
            emoji: nextProps.emoji
        })
    }

    render() {
        return (
            this.state.categories.map(category => (
                <div key={category} className="emoji_list">
                    <h5>{category}</h5>
                    {
                        this.state.emoji.filter(i => i[1].category === category).map(emoji => (
                            <Emoji
                                key={emoji[1].code_points.base}
                                emojiData={emoji}
                            />
                        ))
                    }
                </div>
            ))
        )
    }
}

const mapStateToProps = state => ({
    filter_emoji: state.filterEmoji,
    emoji: Object.entries(state.emojiReducer)
})

export default connect(mapStateToProps) (EmojiBlock)