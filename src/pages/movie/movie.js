import React, { Component } from 'react';
import Header from './../../components/header/header';
import FormSearch from './../../components/form/form';
import Cast from './../../components/cast/cast';
import Footer from './../../components/footer/footer';
import InforMovie from './../../components/InforMovie/InforMovie';
import './movie.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: {
                genres: [],
                credits: {
                    cast: []
                }
            },
            trailer: ''
        }
    }

    getData = () => {
        const key = 'f3e9f7d1677c7aa63c9ab526381eeceb';
        const id = window.location.pathname.substring(7);

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US&append_to_response=videos,credits,image`)
            .then((response) => {
                if (response.status !== 200) {
                    console.log('Error: ' + response.status);
                    return;
                }
                response.json().then((data) => {
                    const movies = data;
                    this.setState({
                        movies: movies
                    });
                    //console.log(Object.values(movies)[25].results.length === 0);
                    if (Object.values(movies)[25].results.length !== 0)
                        this.setState({
                            trailer: Object.values(movies)[25].results[0].key 
                        });
                });
            }).catch(err => { })
    }

    componentDidMount = () => {
        this.getData();    
        $("html, body").animate({ scrollTop: 0}, 1000);
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.movie !== this.state.movies) {
            this.getData();
        }
    }

    render() {
        var { movies, trailer } = this.state;

        //var url = typeof(link[]);
        var bgImage = `https://image.tmdb.org/t/p/w1400_and_h450_face/${movies.backdrop_path}`;
        return (
            <div>
                <div className="backdrop" style={{ backgroundImage: `url("${bgImage}")` }}>
                    <Header />
                    <FormSearch id="form" />

                    <div className="container p-0 pb-5 "  >

                        <h3 className=" mt-2 text-letf pl-2 text-light  bg-dark" >{movies.title}</h3>
                        <div className="row ">
                            <div className="col-lg-4 opacity">
                                <Link to="/">
                                    <img src={movies.poster_path === null ? 'http://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/w300${movies.poster_path}`} alt={`${movies.title} poster`} className="posterImg" />
                                </Link>
                            </div>
                            <section className="col-lg-8">
                                <div className="card opacity" style={{ height: '450px' }}>
                                    <div className="card-body fontSize p-0 ">
                                        <InforMovie movies={movies} trailer={trailer} />
                                    </div>
                                </div>
                            </section>


                        </div>
                    </div>{/* moviesPage */}
                </div>
                <div className="container p-0 pb-5">
                    <h3 className="text-letf w-70 pl-2 text-light bg-dark mt-3">Cast</h3>
                    <Cast cast={movies.credits.cast} />
                </div>
                <Footer />

            </div>
        )
    }


}

export default Movie;
