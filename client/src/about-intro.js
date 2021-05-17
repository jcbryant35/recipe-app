import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './about-styles.scss';
import './_reset.scss';


export class AboutIntro extends React.Component {

    render() {
        return (
            <div id="container">
                <Link to="/">
                    <FontAwesomeIcon icon={faHome} />
                </Link>
                <div id="mainBox">
                    <div id="aboutTextBox">
                        <div id="aboutHeaderPic"></div>
                        <h2>About us</h2>
                        <p>
                            Welcome to Down South Recipes! Being born 
                            and raised in the state of Louisiana, where 
                            cooking is considered to be an art and a passion,
                            and after having experienced all of the cultures 
                            and styles of cooking from North Louisiana's "Soul Food" to
                            South Lousiana's Cajun & Creole food, we decided it was time to share 
                            all of these delicious recipes with the world. 
                            All of our recipes are guaranteed to give you 
                            and your family the satisfying taste of the 
                            south. Whether you're in the mood for some
                            traditional southern soul food, cajun, or creole food,
                            these recipes will not disappoint. 
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}