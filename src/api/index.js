const API_KEY = `72f5e1e79b601b2ea6306152c1097dd8`
const HOST = `https://api.themoviedb.org/3`
const IMAGE_URL =`https://image.tmdb.org/t/p/w500`

let date = new Date();
date.setDate(date.getDate() + 1);
const currentDate = date.toISOString().split('T')[0]
const UPCOMING_MOVIES = `${HOST}/discover/movie?primary_release_date.gte=${currentDate}&release_date.gte=${currentDate}&sort_by=primary_release_date.asc&api_key=${API_KEY}&include_adult=true&page=`
const SEARCH_MOVIES = `${HOST}/search/movie?api_key=${API_KEY}&language=en-US&query=`

export default {
    API_KEY,
    HOST,
    IMAGE_URL,
    UPCOMING_MOVIES,
    SEARCH_MOVIES
}
