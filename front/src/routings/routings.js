import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import _ from "lodash";

import {Main} from "../components/main";
import {AppMain} from "../app_components/main";
import {NotFound} from "../containers/error";

const routes = [
    {
        path: "/scenarios",
        component: AppMain,
    },
    {
        path: '/',
        component: Main,
    },
    {
        path: '*',
        component: NotFound,
    },
];

export const RouteWithSubRoutes = (route) => {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    )
}


export const Routing = () => {
    return (
        <Router>
            <Switch>
                {_.map(routes, (route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </Router>
    )
}

