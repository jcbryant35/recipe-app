import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import navChef from './chef.png';
import './navigation-styles.scss';

export class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavVisible: false,
            isLinksVisible: false    
        };
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    openNav() {
        if(document.querySelector('#navBtn')) {
            //document.querySelector('#navBar').style.display = 'block';
            this.setState({ isNavVisible: true, isLinksVisible: true })
            document.querySelector('#navBar').style.display = 'block';
            document.querySelector('.links').style.display = 'block';
            document.querySelector('#navBtn').style.display = 'none';
        }
    }

    closeNav() {
        if(document.querySelector('#closeNavBtn')) {
            //document.querySelector('#navBar').style.display = 'none';
            this.setState({ isNavVisible: false, isLinksVisible: false })
            document.querySelector('.links').style.display = 'none';
            document.querySelector('#navBtn').style.display = 'block';
        }
    }

    render() {
        return (
            <div>
                <div id="navBox">
                    <nav>
                        <button onClick={ this.openNav } id="navBtn">&#9776;</button>
                        <CSSTransition in={this.state.isNavVisible} timeout={500} classNames="navBar">
                        <div id="navBar" className="navBar">
                            <span onClick={ this.closeNav } id="closeNavBtn">&#x2716;</span>
                            <CSSTransition in={this.state.isLinksVisible} timeout={2000} classNames="links">
                            <ul className="links">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>

                                <li>
                                    <Link to="/breakfast">Breakfast</Link>
                                </li>
                                <li>
                                    <Link to="/lunch-dinner">Lunch & Dinner</Link>
                                </li>
                                <li>
                                    <Link to="/sides">Sides</Link>
                                </li>
                                <li>
                                    <Link to="/desserts">Desserts</Link>
                                </li>
                                <li>
                                    <Link to="/snacks">Snacks</Link>
                                </li>
                                <li>
                                    <Link to="/misc">Misc</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                            </ul>
                            </CSSTransition>
                            <img src={ navChef } id="navImg" alt="chef" />
                        </div>
                        </CSSTransition>

                    </nav>
                </div>
            </div>
        )
    }
};