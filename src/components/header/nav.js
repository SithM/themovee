import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <div className="collapse navbar-collapse row justify-content-end" id="navbarNav" >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="https://www.facebook.com/thanh.rapper.90" target="_blank"  rel="noopener noreferrer"> <i className="fas fa-user"></i> Design By Monochrome</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.themoviedb.org/" target="_blank"  rel="noopener noreferrer"> <i className="fas fa-link"></i> API: The Movie Database</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
