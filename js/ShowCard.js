import React from 'react'
import { Link } from 'react-router'
const { string } = React.PropTypes

const ShowCard = React.createClass({
  propTypes: {
    imdbID: string,
    poster: string,
    title: string,
    year: string,
    description: string
  },
  render () {
    const { imdbID, poster, title, year, description } = this.props
    return (
      <Link to={`/Details/${imdbID}`}>
        <div className='show-card'>
          <img src={`/public/img/posters/${poster}`} />
          <div>
            <h3>{title}</h3>
            <h4>({year})</h4>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    )
  }
})

export default ShowCard
