import React, { Component } from 'react'
import { connect } from 'react-redux'
import Emoji from './Emoji'
import getVisibleEmoji from '../selectors'

class EmojiList extends Component {
    state = {
        allEmoji: getVisibleEmoji(Object.entries(this.props.allEmoji), {text: '', category: ''}),
        visibleEmoji: []
    }
    componentWillReceiveProps = (nextProps) => {
        this.setState({
            visibleEmoji: getVisibleEmoji(this.state.allEmoji, {text: nextProps.filterText, category: nextProps.filterCategory})
        })
    }
    componentWillMount = () => {
        this.setState({
            visibleEmoji: getVisibleEmoji(this.state.allEmoji, {text: '', category: ''})
        })
    }
    render() {
        return (
            <div className="emoji_list">
                <h5>Search Result</h5>
                {
                    this.state.visibleEmoji.map(emoji => (
                        <Emoji
                            key={emoji[0]}
                            emojiData={emoji}
                        />
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    allEmoji: state.emojiReducer,
    filterText: state.filterEmoji.text,
    filterCategory: state.filterEmoji.category
})
export default connect(mapStateToProps) (EmojiList)
