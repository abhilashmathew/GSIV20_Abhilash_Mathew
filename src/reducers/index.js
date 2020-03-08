
import { combineReducers } from 'redux';
import {
    SET_MOVIES,
    SET_ERROR,
    CLEAR_ERROR,
    CLEAR_MOVIES,
    LOADING,
    SET_TOTAL_PAGES
} from "../actions/types"

const initialState = {
    loading: true,
    movieList: [],
    error: null,
    totalPages: 1
}

const movies = (state = initialState, actions) => {
    switch (actions.type) {
        case LOADING:
            return {
                ...state,
                loading: actions.payload,
                error: null,
            }
        case SET_MOVIES:
            return {
                ...state,
                movieList: [...state.movieList, ...actions.payload],
                loading: false,
                error: null,
            }
        case SET_ERROR:
            return {
                ...state,
                loading: false,
                error: actions.payload,
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            }

        case CLEAR_MOVIES:
            return {
                ...state,
                movieList: [],
            }

        case SET_TOTAL_PAGES:
            return {
                ...state,
                totalPages: actions.payload,
            }
        // case SET_SEARCH_QUERY:
        //     return {
        //         ...state,
        //         searchQuery: actions.payload,
        //     }

        // case CLEAR_SEARCH_QUERY:
        //     return {
        //         ...state,
        //         loading: false,
        //         refreshing: false,
        //         searchQuery: '',
        //         page: 1,
        //         error: null,
        //     }

        // case REFRESHING:
        //     return {
        //         ...state,
        //         refreshing: actions.payload,
        //         movieList:[],
        //         page: 1
        //     }

        // case SET_PAGE:
        //     return {
        //         ...state,
        //         page: actions.payload
        //     }

        default:
            return state
    }
}


const reducer = combineReducers({
    movies
});

export default reducer;