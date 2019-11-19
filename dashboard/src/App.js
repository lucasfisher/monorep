import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation.js';
import Body from './components/body.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
    state ={

    }
    render() {

        return (
            <Router>
                <div>
                    <Route path ="/">


                            <div>
                                <Navigation  />
                                <Body />
                            </div>



                    </Route>
                </div>
            </Router>
        );
    }
}

export default App;
