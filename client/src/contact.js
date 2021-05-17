import React from 'react';
import Axios from 'axios';
import { SuccessMessage } from './success.js';

//Styles
import './contact-styles.scss';


export class EmailContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: '',
            flashMessage: false
        }
        this.sendEmail = this.sendEmail.bind(this);
    }



    sendEmail() {
        this.setState({ flashMessage: true })
        
            Axios({
                method: 'POST',
                url:  'http://localhost:8080/about/',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(response => {
                console.log(response.data.id)
    
                this.setState({ 
                    firstName: response.data.id,
                    lastName: response.data.id,
                    email: response.data.id,
                    subject: response.data.id,
                    message: response.data.id,
                })
            }).catch(error => console.log(error))   
    };



    render() {
        const { flashMessage } = this.state;
        return (
            <div>
                <div id="contactForm">
                    <h4>Contact us:</h4>
                    {flashMessage && <SuccessMessage />}
                    <form action="/about" method="POST" id="form">
                        <input className="emailBox" type="text" name="firstName" placeholder="First Name.." required />
                        <br />
                        <input className="emailBox" type="text" name="lastName" placeholder="Last Name.." required />
                        <br />
                        <input className="emailBox" type="text" name="email" placeholder="Your Email.." required />
                        <br />
                        <input className="emailBox" type="text" name="subject" placeholder="Subject" required />
                        <br />
                        <textarea className="emailBox" id="textBox" name="message" placeholder="Type message.." required></textarea>
                        <br />
                        <button type="submit"  onClick={this.sendEmail}>Send</button>
                    </form>                  
                </div>
            </div>
        )
    };
};