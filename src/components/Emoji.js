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
        fontSize: this.props.filter.fontSize
    }
    handleOnClick = () => {
        this.props.addToClipboard(this.state.clipboard + this.state.char)
    }
    componentWillReceiveProps = nextProps => {
        this.setState({
            clipboard: nextProps.clipboard,
            fontSize: nextProps.filter.fontSize
        })
    }
    render() {
        return (
            <span
                className={`${this.state.name} ${this.state.category} code__${this.state.code}`}
                onClick={this.handleOnClick}
                emoji_char={this.state.char}
                style={{
                    fontSize: this.state.fontSize + 'px',
                    height: this.state.fontSize + 15 + 'px',
                    width: this.state.fontSize + 15 + 'px',
                    lineHeight: this.state.fontSize + 15 + 'px'
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
