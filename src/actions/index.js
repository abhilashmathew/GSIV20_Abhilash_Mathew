import axios from "axios"
import API_CONFIG from '../api'
import { SET_ERROR, SET_MOVIES, LOADING, CLEAR_MOVIES, CLEAR_ERROR, SET_TOTAL_PAGES, } from "./types"


export function getUpcomingMoviesList(page) {
    return (dispatch, getState) => {
        try {
            dispatch({ type: LOADING, payload: true, });
            let URL = `${API_CONFIG.UPCOMING_MOVIES}${page}`
            axios.get(URL)
                .then(async response => {

                    dispatch({ type: SET_TOTAL_PAGES, payload: response.data.total_pages })

                    const idArray = response.data.results.map(movie => movie.id)

                    let upComingMoviesPromises = await idArray.map(
                        getMovieDetails,
                    )

                    let allPromises = Promise.all(
                        upComingMoviesPromises,
                    )

                    allPromises
                        .then(res => {
                            dispatch({ type: SET_MOVIES, payload: res })
                        })
                        .catch(err => {
                            dispatch({
                                type: SET_ERROR,
                                payload: err,
                            })
                        })
                })
                .catch(error => {
                    dispatch({
                        type: SET_ERROR,
                        payload: error,
                    })
                })
        } catch (err) {
            dispatch({
                type: SET_ERROR,
                payload: err,
            })
        }

    }
}

export function getSearchedMovies(searchQuery, page) {
    return (dispatch, getState) => {
        try {
            dispatch({ type: LOADING, payload: true, });
            let URL = `${API_CONFIG.SEARCH_MOVIES}${searchQuery}&page=${page}`
            axios.get(URL)
                .then(async response => {

                    if (response.data.results.length == 0)
                        throw new Error("No Movies found for " + searchQuery)

                    dispatch({ type: SET_TOTAL_PAGES, payload: response.data.total_pages })
                    const idArray = response.data.results.map(movie => movie.id)


                    let upComingMoviesPromises = await idArray.map(
                        getMovieDetails,
                    )

                    let allPromises = Promise.all(
                        upComingMoviesPromises,
                    )

                    allPromises
                        .then(res => {
                            dispatch({ type: SET_MOVIES, payload: res })
                        })
                        .catch(err => {
                            dispatch({
                                type: SET_ERROR,
                                payload: err,
                            })
                        })
                })
                .catch(error => {
                    dispatch({
                        type: SET_ERROR,
                        payload: error,
                    })
                })
        } catch (err) {
            dispatch({
                type: SET_ERROR,
                payload: err,
            })
        }

    }
}

export function handleSearchTextChange(query) {
    return (dispatch, getState) => {
        dispatch({ type: CLEAR_MOVIES })
        dispatch(getSearchedMovies(query, 1))
    }
}

export function handleRefresh() {
    return (dispatch, getState) => {
        dispatch({ type: CLEAR_ERROR })
        dispatch({ type: CLEAR_MOVIES })
        dispatch({ type: SET_TOTAL_PAGES, payload: 1 })
    }
}



const getMovieDetails = (id, index) => {
    return new Promise((resolve, reject) => {
        const URL = `${API_CONFIG.HOST}/movie/${id}?api_key=${API_CONFIG.API_KEY}&append_to_response=casts`

        axios.get(URL).then(response => {
            let movieDetails = response.data
            if (
                movieDetails &&
                Object.entries(movieDetails).length !== 0 &&
                movieDetails.constructor === Object
            ) {
                resolve(movieDetails)
            } else {
                reject(new Error("No data received"))
            }
        })
    })
}
