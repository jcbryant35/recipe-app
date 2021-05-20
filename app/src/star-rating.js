import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


export class StarRating extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            emptyIcon: [<FontAwesomeIcon icon={faStar} />],
            color: 'grey'
        }
    }



    changeRating() {
        this.setState({ emptyIcon: this.state.fullIcon } )
    }



    render() {

        return (
            <div>
                <span onClick={this.changeRating} style={{
                    fontSize: '23px',
                    letterSpacing: '5px'
                }}>{this.state.emptyIcon}</span>
            </div>
        )
    }
};