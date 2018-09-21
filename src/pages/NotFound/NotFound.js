import React from 'react';
import Header from './../../components/header/header';
import Footer from './../../components/footer/footer';

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <label className=" mt-5 p-5 justify-content-end">
          <section>
            <h3>Oops!—We can't find the page you're looking for.</h3>
            <p>You tried to request a page that doesn't seem to exist. If you believe this to be in error, let us know on the forums.</p>
          </section>
        </label>
        <Footer />
      </div>

    );
  }
}
export default NotFound;
