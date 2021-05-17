import React from 'react';
import './page-title-styles.scss';

export class DessertsTitleBox extends React.Component {

    render() {
        return (
            <div id="mainContainer">
                <div id="titleBox">
                    <div id="titleLine"></div>
                    <div id="titleText">
                        <h3>Desserts</h3>
                    </div>
                </div>
            </div>
        )
    }
};