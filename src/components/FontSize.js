import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeFontSize } from '../actions'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'

class FontSize extends Component {
    state = {
        value: this.props.filter.font_size,
        valueChanged: this.props.filter.font_size
    }

    handleOnChange = e => {
        this.props.changeFontSize(e)
    }

    componentWillReceiveProps = nextProps => {
        this.setState({
            valueChanged: nextProps.filter.font_size
        })
    }

    render() {
        return (
            <div>
                {
                    // <div className="sidebar_item">
                    //     <div className="color_filter">
                    //         <span className="skin_tone_none"></span>
                    //         <span className="skin_tone_light"></span>
                    //         <span className="skin_tone_medium_light"></span>
                    //         <span className="skin_tone_medium"></span>
                    //         <span className="skin_tone_medium_dark"></span>
                    //         <span className="skin_tone_dark"></span>
                    //     </div>
                    // </div>
                }
                <form className="form font_size sidebar_item">
                    <h3>Emoji Size</h3>
                    <div className="input_range">
                        <InputRange
                            maxValue={50}
                            minValue={0}
                            value={this.state.value}
                            onChange={
                                value => this.setState({ value })
                            }
                            onChangeComplete={this.handleOnChange}
                        />
                    </div>
                </form>
                <div></div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    filter: state.filterEmoji
})

export default connect(mapStateToProps, {changeFontSize}) (FontSize)
