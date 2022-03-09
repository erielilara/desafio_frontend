import { GET_VIDEOGAMES, FILTER_GENRE, FILTER_PLATFORMS } from '../actions'

const initialState = {
  videogames: [],
  videogamescopy: [],
  genres: []
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return { ...state, videogames: action.payload }
    case FILTER_GENRE:
      if (!action.payload) return { ...state, videogames: state.videogames }
      else {
        const byGenre = state.videogames.filter(videogame => videogame.genres.map(genre => genre.name).includes(action.payload))
        return {
          ...state,
          videogames: byGenre
        }
      }
    case FILTER_PLATFORMS:
      if (!action.payload) return { ...state, videogames: state.videogames }
      else {
        const byPlatform = state.videogames.filter(videogame => videogame.platforms.map(platform => platform.platform.name).includes(action.payload))
        return {
          ...state,
          videogames: byPlatform
        }
      }
    default:
      return state
  }
}
export default rootReducer
