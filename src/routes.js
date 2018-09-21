import React from 'react';
import Home from './pages/home/home';
import Movie from './pages/movie/movie';
import Search from './pages/search/search';
import NotFound from './pages/NotFound/NotFound';
const routes = [
    {
        path: '/',
        exact : true,
        main: ({history}) => <Home history={history}/>
    },
    {
        path: '/movie/:id',
        exact : false,
        main: () => <Movie />
    },
    {
        path: '/search/:value',
        exact : false,
        main: ({history}) => <Search history={history}/>
    },
    {
        path: '',
        exact : false,
        main: () => <NotFound />
    }
];

export default routes;