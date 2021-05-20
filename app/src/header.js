import React from 'react';
import './header-styles.scss';
import { Navigation } from './navigation';

export class Header extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <Navigation />
                </header>
            </div>
        )
    }
};