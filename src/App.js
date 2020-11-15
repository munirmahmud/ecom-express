import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Navigation from './components/Navigation/Navigation';

const App = () => {
    return (
        <Router>
            <Navigation />
            <Banner />
        </Router>
    );
};

export default App;
