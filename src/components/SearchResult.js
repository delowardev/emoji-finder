import React, { Component } from 'react'
import { connect } from 'react-redux'
import Emoji from './Emoji'
import getVisibleEmoji from '../selectors'

class SearchResult extends Component {
    state = {
        allEmoji: getVisibleEmoji(Object.entries(this.props.allEmoji), {text: ''}),
        visibleEmoji: []
    }
    componentWillReceiveProps = (nextProps) => {
        this.setState({
            visibleEmoji: getVisibleEmoji(this.state.allEmoji, {text: nextProps.filterText})
        })
    }

    // componentWillMount = () => {
    //     this.setState({
    //         visibleEmoji: getVisibleEmoji(this.state.allEmoji, {text: '', category: ''})
    //     })
    // }

    render() {
        
        return (
            (this.state.visibleEmoji.length > 0 && this.props.filterText ) && 
            <div className="emoji_list">
                <h3>Search Result</h3>
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
    filterText: state.filterEmoji.text
})
export default connect(mapStateToProps) (SearchResult)
