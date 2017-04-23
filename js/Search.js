import React from 'react'
import ShowCard from './ShowCard'
import preload from '../public/data.json'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        {preload.shows.map(show =>
          <ShowCard show={show} />
        )}
      </div>
    )
  }
})

export default Search
