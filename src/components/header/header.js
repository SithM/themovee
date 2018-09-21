import React from 'react';
import { Link } from 'react-router-dom';
import  Nav  from './nav';

class Header extends React.Component {
  render() {
    return (
      <nav className="containner navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to={'/'} className="navbar-brand"><h4> TMDb</h4></Link>
        <Nav/>
      </nav>
    );
  }
}

export default Header;
