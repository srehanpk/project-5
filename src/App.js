import React from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Contact from './component/Contact';
import Navbar from './component/Navbar';



function App() {
  return (
    <div className="App">

    <Navbar />
    <Switch>

    <Route exact path= '/' component={Home} />
    <Route exact path= '/about' component={About} />
    <Route exact path= '/service' component={Service} />
    <Route exact path= '/contact' component={Contact} />
     <Redirect to='/' /> 
    </Switch>  
    </div>
  );
}

export default App;
