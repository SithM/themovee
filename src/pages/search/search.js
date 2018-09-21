import React from 'react';
import Header from './../../components/header/header';
import FormSearch from './../../components/form/form';
import SearchData from './../../components/results/results';
import Footer from './../../components/footer/footer';
import $ from 'jquery';

class Search extends React.Component {

  componentDidMount = () => {
    $("html, body").animate({ scrollTop: 0}, 1000);
  }

  render() {
    return(
      <div>
        <Header />
        <FormSearch />
        <SearchData />
        <Footer />
      </div>
    );
  }
}

export default Search;
