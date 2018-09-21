import React from 'react';

class InforMovie extends React.Component {
    render() {
        var { movies, trailer } = this.props;
        var rate = Math.round(movies.vote_average);
        return (
            <div>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link text-dark active font-weight-bold" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Infomation</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark font-weight-bold" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Contents</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark font-weight-bold" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Trailer</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <p className="card-text pl-3 pt-3">
                            <span className="font-weight-bold">Release date: </span> {movies.release_date}<br></br>
                            <span className="font-weight-bold">Language: </span>{movies.original_language} <br></br>
                            <span className="font-weight-bold">Time : </span> {movies.runtime} minutes <br></br>
                            <span className="font-weight-bold">Status : </span> {movies.status} <br></br>
                            <span className="font-weight-bold">Rating : </span> {movies.vote_average} <br></br>
                            <span className="font-weight-bold">Vote count: </span> {movies.vote_count} <br></br>
                            <span className="font-weight-bold">Vote: </span> {this.theShowRate(rate)}<br></br>
                            <span className="font-weight-bold">Genres: </span>
                            {movies.genres.map((genre, index) => {
                                if (index < movies.genres.length - 1) {
                                    return genre.name + ', '
                                } else {
                                    return genre.name
                                }
                            })}
                        </p>
                    </div>
                    <div className="tab-pane fade p-3" id="profile" role="tabpanel" aria-labelledby="profile-tab"><p>{movies.overview}</p></div>
                    <div className={`tab-pane fade ${trailer ? '' : 'd-none'}`} id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <iframe title="trailer" width="100%" height="407" src={`https://www.youtube.com/embed/${trailer}?ecver=1`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </div>
                    <div className={`tab-pane fade ${trailer ? 'd-none' : 'p-3'}`}>
                        <h4>Updating...</h4>
                    </div>
                </div>
            </div>
        );
    }

    theShowRate = (rate) => {
        var result = null;
        var stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        result = stars.map((star, index) => {
            return <i key={index} className={`fas fa-star ${rate >= index + 1 ? 'text-warning' : 'text-dark'} `}></i>
        })
        return result;
    }
}

export default InforMovie;