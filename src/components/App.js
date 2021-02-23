import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

//App components
import Home from './Home';
import About from './About';
import Header from './Header';
import Teachers from './Teachers';
import Courses from './Courses';

const App = () => (
    <BrowserRouter>
        <div className="container">
            <Header/>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/about" render={() => <About title='About'/>} />
            <Route exact path="/teachers">
                <Teachers/>
            </Route>
            <Route exact path="/courses">
                <Courses/>
            </Route>
        </div>
    </BrowserRouter>
);

export default App;