import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "../app";


export default class Routeing extends React.Component{
    componentDidMount() {
        window.screenTop
    }

    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route exact path='/scenarios' component={App} />
                </Switch>
            </Router>
        )
    }
}