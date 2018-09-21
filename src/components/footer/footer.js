import React from 'react';
import './footer.css';
import $ from "jquery";

class Footer extends React.Component {


    componentDidMount = () => {
        $(document).ready(() => {
            $(".clickToDisplay").click(() => {
                $(".panel").slideToggle(700);
            });
        });
    }

    onMouseScroll = () => {
        this.setState({
            isDisplay: false
        });
    }

    render() {
        return (
            <footer className="footer font-small bg-dark text-light pb-0">
                {/* Footer Links */}
                <div className="container-fluid ">
                    {/* Grid row */}
                    <div className="row bg-dark clickToDisplay">
                        <div className="col-md-12">
                            <h6 className="text-center mt-2">About Me</h6>
                        </div>
                    </div>
                    <div className="panel">
                        <div className="row ">
                            <div className="col-md-12">
                                <hr className="bg-white" />
                                <p className="col-lg-4 float-left"><span className="text-warning font-weight-bold"><i className="fas fa-map-marker-alt"></i> Location: </span>FPT University, Ha Noi, Viet Nam</p>
                                <p className="col-lg-2 float-left"><span className="text-warning font-weight-bold"><i className="fas fa-phone"></i> Phone: </span>+841653119808</p>
                                <p className="col-lg-3 float-left"><span className="text-warning font-weight-bold"><i className="far fa-envelope"></i> Email: </span>bakadwite@gmail.com</p>
                                <p className="col-lg-3 float-left"><span className="text-warning font-weight-bold"><i className="fab fa-facebook"></i> Facebook: </span>Monochrome</p>
                            </div>
                        </div>
                        <div className={`text-center `}><i className="fas fa-angle-right"></i> Inspired by:
                        <a className="text-warning" target="_blank" rel="noopener noreferrer" href="https://madewithreact.com/moviee"> MadeWithReact.com </a> <i className="fas fa-angle-left"></i>
                        </div>
                    </div>
                </div>

            </footer>
        );
    }
}

export default Footer;