import React from 'react';
import emailjs from 'emailjs-com';
import { SuccessMessage } from './success';
import './contact-styles.scss';


export class EmailContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flashMessage: false
        }
        this.sendEmail = this.sendEmail.bind(this);
    }



    sendEmail(e) {
        this.setState({ flashMessage: true })

        setTimeout(() => {
            this.setState({ flashMessage: false });
        }, 2000);

        e.preventDefault();
    
        emailjs.sendForm('service_wt627ll', 'template_o2pgkvn', e.target, 'user_A782BDiZ7RfBzEraPURD8')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };



   render() {
    const { flashMessage } = this.state;
        return (
            <div>
                <div id="contactForm">
                    <h4>Contact us:</h4>
                    {flashMessage && <SuccessMessage />}

                    <form  id="form"  onSubmit={this.sendEmail}>
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
                        <button type="submit">Send</button>
                    </form>                  
                </div>
            </div>
        )
    };
};