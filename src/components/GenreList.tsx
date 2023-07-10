import React from 'react'
import UseGenres from '../assets/hooks/useGenres'

const GenreList = () => {
    const {genres, isLoading, error} = UseGenres()
  return (
    <ul>{genres.map((genre) => <li key={genre.id} value={genre.name}>{genre.name}</li>)}</ul>
  )
}

export default GenreList