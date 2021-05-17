import React from 'react';
import './page-title-styles.scss';

export class LunchDinnerTitleBox extends React.Component {

    render() {
        return (
            <div id="mainContainer">
                <div id="titleBox">
                    <div id="titleLine"></div>
                    <div id="titleText">
                        <h3>Lunch & Dinner</h3>
                    </div>
                </div>
            </div>
        )
    }
};