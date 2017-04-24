import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { setSearchTerm } from './actionCreators'

const { string, func, object } = React.PropTypes

const Landing = React.createClass({
  contextTypes: {
    router: object
  },
  propTypes: {
    searchTerm: string,
    dispatch: func
  },
  handleSearchTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value))
  },
  handleSearchSubmit (event) {
    event.preventDefault()
    this.context.router.transitionTo('/search') // Programatically navigate with react router
  },
  render () {
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <input
          onChange={this.handleSearchTermChange}
          value={this.props.searchTerm}
          type='text'
          placeholder='search'
        />
        <Link to='/search'>or Browse All</Link>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Landing)
