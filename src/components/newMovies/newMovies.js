import React from 'react';
import { Link } from 'react-router-dom';
import './newMovies.css';
import { connect } from 'react-redux';
import { actGetDataFilmsRequest } from '../../actions';

class NewMovies extends React.Component {

    componentDidMount() {
        this.props.getDataFilms();
    }

    //render

    render() {
        var { dataFilms } = this.props;
        return (
            <div>
                <div className="container p-0 mt-2">
                    <h3 className="text-letf w-70 pl-2 text-light  bg-dark">New releases</h3>
                </div>
                <div className="container mb-5">
                    <div className="row">
                        {this.theShowMovie(dataFilms)}
                    </div>
                </div>
            </div>
        );
    }

    //show movie

    theShowMovie = (dataFilms) => {
        var result = null;
        if (dataFilms.length > 0) {
            result = dataFilms.map((data, index) => {
                return (
                    <div className="card rounded p-0 col-12 col-md-6 col-lg-4 col-xl-3 hover" key={index} style={{ width: "100%", height: "auto" }}>
                        <Link to={`/movie/${data.id}`} >
                            <img style={{ width: "100%", height: "auto" }} src={data.poster_path === null ? 'http://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/w300/${data.poster_path}`} alt={`${data.title} poster`} className="img-fluid" />
                        </Link>
                        <div className="card-body bg-dark view "  >
                            <p className="text-center name">{data.title}</p>
                        </div>
                    </div >
                );
            })
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        dataFilms: state.dataFilms
    }
}

//get data from api

const mapDispatchToProps = (dispatch) => {
    return {
        getDataFilms: () => {
            dispatch(actGetDataFilmsRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMovies);
