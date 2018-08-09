import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToClipboard } from '../actions'
import Copy from 'copy-to-clipboard'

class CopyEmoji extends Component {
    state = {
        clipboard: '',
        copied: false
    }
    handleOnChange = e => {
        this.props.addToClipboard(e.target.value)
    }
    componentWillReceiveProps = nextProps => {
        this.setState({
            clipboard: nextProps.clipboard,
            copied: false
        })
    }
    render() {
        return (
            this.state.clipboard && 
            <div className="emoji_copy sidebar_item">
                <h3>Copy & Paste Emoji</h3>
                <textarea
                    value={this.state.clipboard}
                    onChange={this.handleOnChange}
                />
                <button
                    onClick={() => {
                        Copy(this.state.clipboard)
                        this.setState({
                            copied: true
                        })
                    }}
                >
                    {this.state.copied ? 'copied' : 'copy'}
                </button>
                <button
                    onClick={() =>  this.props.addToClipboard('')}
                    className="close_btn"
                >close</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    clipboard: state.clipboard
})

export default connect (mapStateToProps, {addToClipboard}) (CopyEmoji)