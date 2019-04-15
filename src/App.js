import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './assests/style/custome.css';

import Test from './Test.jsx';
import Home from './component/Home.jsx';
import Car from './component/Car.jsx';
import { Header } from './component/Header.jsx';

class App extends Component {
    render() {
        return (
            <div>
                {/* <h1>Welcome to webpack</h1> */}
                {/* <Test/> */}
                <Header/>
                <Switch>
                    <Route exact path="/" component = {Home}/>
                    <Route path="/car" component = {Car}/>
                    <Route path="/test" component = {Test}/>
                </Switch>
            </div>
        );
    }
}

export default App;