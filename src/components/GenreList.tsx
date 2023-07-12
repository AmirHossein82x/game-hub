import React from 'react'
import UseGenres, { Genre } from '../assets/hooks/useGenres'
import useData from '../assets/hooks/useData'

const GenreList = () => {
    const {data, isLoading, error} = UseGenres()
  return (
    <ul>{data.map((genre) => <li key={genre.id} value={genre.name}>{genre.name}</li>)}</ul>
  )
}

export default GenreList