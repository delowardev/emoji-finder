import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToClipboard } from '../actions'

class Emoji extends Component {
    state = {
        char: String.fromCodePoint(...this.props.emojiData[0].split('-').map(item => parseInt(item, 16))),
        name: this.props.emojiData[1].name,
        category: this.props.emojiData[1].category,
        code: this.props.emojiData[1].code_points.base,
        clipboard: this.props.clipboard,
        font_size: this.props.filter.font_size
    }
    handleOnClick = () => {
        this.props.addToClipboard(this.state.clipboard + this.state.char)
    }
    componentWillReceiveProps = nextProps => {
        this.setState({
            clipboard: nextProps.clipboard,
            font_size: nextProps.filter.font_size
        })
    }
    render() {
        return (
            <span
                className={`${this.state.name} ${this.state.category} code__${this.state.code}`}
                onClick={this.handleOnClick}
                emoji_char={this.state.char}
                style={{
                    fontSize: this.state.font_size + 'px',
                    height: this.state.font_size + 15 + 'px',
                    minWidth: this.state.font_size + 15 + 'px',
                    lineHeight: this.state.font_size + 15 + 'px'
                }}
            >
                {this.state.char}
            </span>
        )
    }
}

const mapStateToProps = state => ({
    clipboard: state.clipboard,
    filter: state.filterEmoji
})

export default connect(mapStateToProps, {addToClipboard}) (Emoji)
