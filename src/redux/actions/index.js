import axios from 'axios'

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES'
export const GET_GENRES = 'GET_GENRES'
export const FILTER_GENRE = 'FILTER_GENRE'
export const FILTER_PLATFORMS = 'FILTER_PLATFORMS'

export const getVideoGames = () => {
  return async (dispatch) => {
    const response = await axios.get('https://api.rawg.io/api/games?key=c3032a7b15f94797bf909a412dd0fcc7')
    let videogames = response.data.results
    let next = response.data.next

    while (videogames.length <= 50) {
      const urlNext = await axios.get(next)
      const nextVideogames = await urlNext.data.results
      videogames = [...videogames, ...nextVideogames]
      next = urlNext.data.next
    }
    return dispatch({ type: GET_VIDEOGAMES, payload: videogames })
  }
}

export const getVideogamesByName = (name) => {
  return async (dispatch) => {
    if (name) {
      const response = await axios.get(`https://api.rawg.io/api/games?key=c3032a7b15f94797bf909a412dd0fcc7&search=${name}`)
      const videogames = response.data.results
      return dispatch({ type: GET_VIDEOGAMES, payload: videogames })
    }
  }
}

export const filterGenre = (payload) => {
  return {
    type: FILTER_GENRE, payload
  }
}

export const filterPlatforms = (payload) => {
  return {
    type: FILTER_PLATFORMS, payload
  }
}
