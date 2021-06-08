import React from 'react';
import {Container} from '@material-ui/core';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";


import Home from './components/Home/Home';
import Auth from './components/Auth/Auth.js';
import Dashboard from './components/Dashboard/Dashboard.js';





function App(){
    
    return(
        <Router>
            <Container maxwidth="lg">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/auth" exact component={Auth} />
                        <Route path="/dashboard" exact component={Dashboard} />
                    </Switch>
            </Container>
        </Router>
    );
}


export default App;