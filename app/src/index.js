import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { Home } from './home.js';
import { Breakfast } from './breakfast.js';
import { LunchDinner } from './lunch-dinner.js';
import { Sides } from './sides.js';
import { Desserts } from './desserts.js';
import { Snacks } from './snacks.js';
import { Misc } from './misc.js';
import { About } from './about.js';





class App extends React.Component {

    


    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/breakfast" exact component={Breakfast} />
                        <Route path="/lunch-dinner" exact component={LunchDinner} />
                        <Route path="/sides" exact component={Sides} />
                        <Route path="/desserts" exact component={Desserts} />
                        <Route path="/snacks" exact component={Snacks} />
                        <Route path="/misc" exact component={Misc} />
                        <Route path="/about" exact component={About} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
