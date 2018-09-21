import * as Types from './../constains/ActionTypes';
var initialState = [];

const dataFilms = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_DATA:
            state = action.dataFilms;
            return state; 

        case Types.SEARCH_DATA:
            state = action.dataFilms;
            return state; 

        default: return [...state];
    }
};

export default dataFilms;