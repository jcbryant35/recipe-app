import React from 'react';
import { Header } from './header';
import { AboutIntro } from './about-intro';
import { EmailContactForm } from './contact';

//Styles
import './about-styles.scss';
import './_reset.scss';

export class About extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <AboutIntro />
                <br />
                <br />
                <EmailContactForm />
            </div>
        )
    }
};