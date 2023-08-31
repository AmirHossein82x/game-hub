import React from 'react'
import usePlatforms from './usePlaltforms'
import UseGenres from './useGenres'

const useGenre = (id?: number) => {
    const genres = UseGenres()
    const genre = genres?.data?.results.find((g) => g.id === id)
  return genre
}

export default useGenre