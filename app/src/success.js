import React from 'react';
import './success-styles.scss';

export class SuccessMessage extends React.Component {
    
    render() {
        return (
            <div id="successMessage">
                <strong>
                    &#x2714; 
                    Success!
                </strong>
            </div>
        )
    };
};