import React, { Component } from 'react'
import { connect } from 'react-redux'
import Emoji from './Emoji'
import getVisibleEmoji from '../selectors'

class EmojiList extends Component {
    state = {
        allEmoji: this.props.allEmoji
    }
    componentWillReceiveProps = (nextProps) => {
        this.setState({
            allEmoji: getVisibleEmoji(this.state.allEmoji, {text: nextProps.filterText})
        })
    }
    render() {
        return (
            <div className="emoji_list">
                {
                    Object.entries(this.state.allEmoji).map(emoji => (
                        // <Emoji
                        //     key={emoji[0]}
                        //     emojiData={emoji}
                        // />
                        console.log(emoji)
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    allEmoji: state.emojiReducer,
    filterText: state.filterEmoji.text
})
export default connect(mapStateToProps) (EmojiList)
