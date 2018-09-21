import React from 'react';
import './form.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actSearchDataFilmsRequest } from './../../actions';
import { withRouter } from 'react-router-dom';

class FormSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    onClick = (e) => {
        if (this.state.search !== '') {
            this.props.getDataSearch(this.state.search);
        } else {
            alert("Please enter a title!");
            e.preventDefault();
        }
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.getDataSearch(this.state.search);
        this.props.history.push(`/search/${this.state.search}`);
    }


    onChange = (event) => {
        var target = event.target;
        var search = target.name;
        var value = target.value;
        this.setState({
            [search]: value
        });
    }

    render() {
        var { search } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmitForm} id="form">
                    <div className="container p-0 opacity">
                        <div className="input-group">
                            <input onChange={this.onChange} type="text" name="search" className="searchBar form-control" id="searchInput" placeholder="Search a movie" required />
                            <div className="input-group-prepend">
                                <div className="input-group-append ">
                                    <span className="input-group-text p-0 pt-1">
                                        <Link to={`/search/${search}`} onClick={this.onClick} className="text-dark col align-items-center">
                                            <i className="fas fa-search"></i>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    }
}

//get data from api

const mapDispatchToProps = (dispatch) => {
    return {
        getDataSearch: (value) => {
            dispatch(actSearchDataFilmsRequest(value));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FormSearch));
