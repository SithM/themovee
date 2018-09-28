import React from 'react';
import Header from './../../components/header/header';
import FormSearch from './../../components/form/form';
import NewMovies from './../../components/newMovies/newMovies';
import Footer from './../../components/footer/footer';
import $ from 'jquery';
import OnTop from '../../components/ontop/ontop';

class Home extends React.Component {

  componentDidMount = () => {
    $("html, body").animate({ scrollTop: 0}, 1000);
  }

  render() {
    return(
      <div id="home">
        <Header />
        <FormSearch />
        <NewMovies />
        <OnTop />
        <Footer />
      </div>
    );
  }
}

export default Home;
