import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setFilterText } from '../actions'

class Search extends Component {
  
  state = {
    keyword: ''
  }

  handleOnChange = e => {
    this.props.setFilterText(e.target.value)
  }

  componentWillReceiveProps = nextProps => {
    this.setState({
      keyword: nextProps.filter.text
    })
  }

  render() {
    return (
        <div>
            <form className="search_form">
                <div className="input_wrap">
                    <input
                        type="search"
                        placeholder="Search Here"
                        value={this.state.keyword}
                        onChange={this.handleOnChange}
                    >
                    </input>
                </div>
            </form>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  filter: state.filterEmoji
})


export default connect (mapStateToProps, {setFilterText}) (Search)
