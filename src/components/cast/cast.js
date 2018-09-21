import React from 'react';

class Cast extends React.Component {
	render() {
		var { cast } = this.props;
		return this.theShowCast(cast)
	}

	theShowCast = (casts) => {
		const link = 'https://image.tmdb.org/t/p/w300';
		var result = null;
		if (casts.length > 0) {
			result = casts.slice(0, 6).map((cast, index) => {
				return (
					<figure key={index} className="figure p-0 col-sm-12 col-md-6 col-lg-4 col-xl-2">
						<img style={{width: '100%'}} className="img-fluid" src={cast.profile_path === null ? 'http://via.placeholder.com/300x450' : link + cast.profile_path} key={index} alt={cast.name} />
						<figcaption className="figure-caption text-center font-weight-bold">{cast.name}</figcaption>
					</figure>
				);
			})
		}
		return result;
	}
}

export default Cast;
