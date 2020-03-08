import API_CONFIG from '../api'
import CONSTANTS from "../utils/constants";


const genreNames = genres => genres.map(genre => genre.name)

const castNames = casts => casts ? casts.map(cast => cast.name) : []

const releaseYear = releaseDate => releaseDate ? releaseDate.substring(0, 4) + ' | ' : ''

const director = crews => {
  if (!crews)
    return ''
   let crew = crews.find(o => o.job === 'Director')
   return crew ? ' | ' + crew.name : ''
}

const movieImage = imageLink => imageLink ? API_CONFIG.IMAGE_URL + imageLink : CONSTANTS.NO_IMAGE

const formatedRuntime = str => {
  let mins_num = parseFloat(str, 10)
  let hours = Math.floor(mins_num / 60)
  let minutes = Math.floor(mins_num - (hours * 3600) / 60)
  let seconds = Math.floor(mins_num * 60 - hours * 3600 - minutes * 60)

  if (hours < 10) {
    hours = "0" + hours
  }
  if (minutes < 10) {
    minutes = "0" + minutes
  }
  return hours + ":" + minutes
}

export {
  movieImage,
  genreNames,
  formatedRuntime,
  castNames,
  releaseYear,
  director
}