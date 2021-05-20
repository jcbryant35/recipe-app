import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './home-styles.scss';
import './_reset.scss';
import chickenNoodleSoup from './chicken-noodle-soup.jpg';
import etouffee from './etouffee.jpg';
import roastedPotatoes from './roasted-potatoes.jpg';
import navChef from './chef.png';


export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavVisible: false,
            isLinksVisible: false,    
        };
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }


    openNav() {
        if(document.querySelector('#navBtn')) {
            this.setState({ isNavVisible: true, isLinksVisible: true })
            document.querySelector('#navBar').style.display = 'block';
            document.querySelector('.links').style.display = 'block';
            document.querySelector('#navBtn').style.display = 'none';
        }
    }

    closeNav() {
        if(document.querySelector('#closeNavBtn')) {
            this.setState({ isNavVisible: false, isLinksVisible: false })
            document.querySelector('.links').style.display = 'none';
            document.querySelector('#navBtn').style.display = 'block';
        }
    }



    render() {
        return (
            <div>
                <div id="mainBox" className="mainBox">
                    <nav>
                        <button onClick={ this.openNav } id="navBtn">&#9776;</button>

                        <CSSTransition in={this.state.isNavVisible} timeout={500} classNames="navBar">
                        <div id="navBar" className="navBar">
                            <span onClick={ this.closeNav } id="closeNavBtn" className="closeNavMenu">&#x2716;</span>
                            <CSSTransition in={this.state.isLinksVisible} timeout={2000} classNames="links">
                            <ul className="links">
                                <li>
                                    <Link className="navLink" to="/breakfast">Breakfast</Link>
                                </li>
                                <li>
                                    <Link className="navLink" to="/lunch-dinner">Lunch & Dinner</Link>
                                </li>
                                <li>
                                    <Link className="navLink" to="/sides">Sides</Link>
                                </li>
                                <li>
                                    <Link className="navLink" to="/desserts">Desserts</Link>
                                </li>
                                <li>
                                    <Link className="navLink" to="/snacks">Snacks</Link>
                                </li>
                                <li>
                                    <Link className="navLink" to="/misc">Misc</Link>
                                </li>
                                <li>
                                    <Link className="navLink" to="/about">About</Link>
                                </li>
                            </ul>
                            </CSSTransition>
                            <img src={ navChef } id="navImg" alt="chef" />
                        </div>
                        </CSSTransition>
                    </nav>
                    <main id="main">
                        <div id="borderBox">
                            <div id="chefImg"></div>
                            <div id="featureBox">
                                <div id="featureText">
                                    <h2>Featured:</h2>
                                </div>

                                {/*Carousel*/}
                                <div id="demo" className="carousel slide h-75 " data-ride="carousel">

                                {/*Indicators*/}
                                <ul className="carousel-indicators">
                                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                                    <li data-target="#demo" data-slide-to="1"></li>
                                    <li data-target="#demo" data-slide-to="2"></li>
                                </ul>

                                {/*The slideshow*/}
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={ chickenNoodleSoup } alt="Chicken Noodle Soup" />

                                        <div className="carousel-caption">
                                            <h6>Chicken Noodle Soup</h6>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={ etouffee } alt="Etouffee" />
                                        <div className="carousel-caption">
                                            <h6>Etouffee</h6>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={ roastedPotatoes } alt="Roasted Potatoes" />
                                        <div className="carousel-caption">
                                            <h6>Roasted Potatoes</h6>
                                        </div>
                                    </div>
                                </div>

                                {/*Left and right controls*/}
                                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </a>
                                <a className="carousel-control-next" href="#demo" data-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </a>

                                </div>
                            </div>
                        </div>    
                    </main>
                </div> 
            </div>
        )
    }
}