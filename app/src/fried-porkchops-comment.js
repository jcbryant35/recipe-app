import React, { Fragment } from 'react';
import Axios from 'axios';
import Rater from 'react-rater';
import { SuccessMessage } from './success.js';
import './comment-styles.scss';

export class FriedPorkChopsCommentBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: [],
            reviews: [],
            rating: [],
            flashMessage: false
        }
        this.addReview = this.addReview.bind(this);
        this.handleRate = this.handleRate.bind(this);
    };

    //REVIEWS
    addReview() {
        this.setState( { flashMessage: true });
        Axios({
            method: 'POST',
            url: 'http://localhost:8080/fried-porkchops/reviews', 
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            this.setState({ username: [response.data.id], reviews: [response.data.id] })
        }).catch(error => console.log(error))
    }



    
    componentDidMount() {

        Axios.get('http://localhost:8080/fried-porkchops')
        .then(reviews => {
            console.log(reviews.data.reviews)
            this.setState({ reviews: reviews.data.reviews })
        })
        .catch(err => console.log(err))

        Axios.get('http://localhost:8080/fried-porkchops')
        .then(username => {
            console.log(username.data.username)
            this.setState({ username: username.data.username })
        })
        .catch(err => console.log(err))
    };


    //STAR RATING
    handleRate( { rating }) {
        console.log(rating);
        this.setState({ rating: rating, flashMessage: true });

        setTimeout(() => {
            this.setState({ flashMessage: false });
        }, 2000);

        Axios({
            method: 'POST',
            url: 'http://localhost:8080/fried-porkchops/',  
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                rating: rating
            }
        }).then(response => {
            console.log(response.data.id)
            this.setState({ rating: [response.data.id] })
        }).catch(error => console.log(error))
    }    
   

    render() {
        const { flashMessage } = this.state;
        return (
            <div id="commentWrapper">
                <div className="commentHeader">
                    {flashMessage && <SuccessMessage />}
                    <h5>Leave a Rating!</h5>
                    <form className="form" action="/fried-porkchops" method="POST" >                    
                        <Rater style={{fontSize: '35px'}} interactive={true} total={5} onRate={this.handleRate} rating={this.state.rating}  />
                        <br /><br />
                        <hr />
                        <h5>Leave a Review!</h5>
                        <textarea className="reviewTextBox" maxLength="250" placeholder="Write a review..." name="reviews"></textarea>
                        <input type="text" placeholder="Your name" name="username" />
                        <br />
                        <button className="submitReviewBtn" type="submit" onClick={this.addReview}>Submit</button>
                    </form>
                </div>
                <hr />
                <Fragment>
                <div className="reviews">
                        {this.state.reviews.map((val, index) => {
                            return  <span key={index} className="text">
                                        <h6>{val.username}:</h6>
                                        <p>{val.reviews}</p>
                                    </span>
                        })}
                </div>
                </Fragment>
                <hr />
            </div>
        )
    }
};

