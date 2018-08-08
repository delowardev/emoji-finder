import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToClipboard } from '../actions'

class CopyEmojii extends Component {
    state = {
        clipboard: this.props.clipboard
    }
    handleOnChange = e => {
        this.props.addToClipboard(e.target.value)
    }
    componentWillReceiveProps = nextProps => {
        this.setState({
            clipboard: nextProps.clipboard
        })
    }
    render() {
        return (
            <div className="emoji_copy">
                <h3>Copy & Paste Emoji</h3>
                <textarea
                    value={this.state.clipboard_emoji}
                    onChange={this.handleOnChange}
                />
                <button>Copy</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    clipboard: state.clipboard
})

export default connect (mapStateToProps, {addToClipboard}) (CopyEmojii)