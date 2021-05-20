import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './search-bar-styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export class SearchBar extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = { 
            display: 'none',
            isVisible: false
        }
        this.showBar = this.showBar.bind(this);
        this.hideBar = this.hideBar.bind(this);
        this.userInput = this.userInput.bind(this);
    };

    showBar() {
        this.setState({ display: 'block', isVisible: true });
    };

    hideBar() {
        this.setState({ display: 'none', isVisible: false });
        this.props.searches('');
        const inputText = document.getElementById('input');
        inputText.value = '';
    };

    userInput(e) {
        this.props.searches(e.target.value);
    };


    render() {
        const searchValue = this.props.value;

        return (
            <div>
                <div id="searchButtonContainer">
                    <div id="searchButton" onClick={this.showBar}>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                </div>
                <CSSTransition in={this.state.isVisible} timeout={100} classNames="searchBar">
                <div id="searchContainer" className="searchBar">
                    <div id="searchBox" style={{display: this.state.display}}>
                        <input value={searchValue} onChange={this.userInput} type="text" placeholder="Search.." id="input"  />
                        <span id="closeSearchBtn" onClick={this.hideBar}>X</span>
                    </div>
                </div>
                </CSSTransition>
            </div>
        )
    };
};




