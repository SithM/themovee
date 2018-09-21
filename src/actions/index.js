import * as Types from './../constains/ActionTypes';
import callApi from './../utils/apiCaller';

export const actGetDataFilmsRequest = () => {
    const key = 'f3e9f7d1677c7aa63c9ab526381eeceb';
    // Get a date range between today and one month ago to dynamically update the link for the request
    let todayDate = new Date();
    let today = todayDate.getFullYear() + '-' + (todayDate.getMonth() + 1) + '-' + todayDate.getDate();
    let oneMonthAgo = (todayDate.getMonth() === 0 ? todayDate.getFullYear() - 1 : todayDate.getFullYear()) + '-' + (todayDate.getMonth() === 0 ? todayDate.getMonth() + 12 : todayDate.getMonth()) + '-' + todayDate.getDate();

    //get data from api the moviedb
    return dispatch => {
        return callApi(`/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${oneMonthAgo}&primary_release_date.lte=${today}`, 'GET', null).then(res => {
            dispatch(actGetDataFilms(res.data.results));
        });
    };
}

export const actGetDataFilms = (dataFilms) => {
    return {
        type: Types.GET_DATA,
        dataFilms
    }
}

export const actSearchDataFilmsRequest = (value) => {
    const key = 'f3e9f7d1677c7aa63c9ab526381eeceb';
    //get data from api the moviedb with value
    return dispatch => {
        return callApi(`3/search/movie?api_key=${key}&language=en-US&query=${value}&page=1&include_adult=false`, 'GET', null).then(res => {
            dispatch(actSearchDataFilms(res.data.results));
        });
    };
}

export const actSearchDataFilms = (dataFilms) => {
    return {
        type: Types.SEARCH_DATA,
        dataFilms
    }
}

