import React from "react";
import { Route } from "react-router";

import {Main} from "./components/main";
import {AppMain} from "./app_components/main";

export default class App extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Route exact path='/' component={Main} />
                <Route exact path='/scenarios' component={AppMain} />
            </React.Fragment>
        )
    }
}