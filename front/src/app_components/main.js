import React, { useState, useReducer, useContext } from "react";
import {Switch} from "react-router-dom";
import {useRouteMatch} from "react-router";
import {
    makeStyles,
    Grid,
} from "@material-ui/core";
import _ from "lodash";

import reducers, {initialState} from "../reducers"
import {AppContext} from "../app_contexts/AppContext";
import {AppFooter} from "./footer";
import {AppHeader} from "./header";
import {RouteWithSubRoutes} from "../routings/routings";
import {Login} from "../containers/app_login";
import {AppContent} from "../containers/app_content";
import {PrivatePage} from "../containers/private_page";
import {SignIn} from "../containers/app_signin";






const useStyles = makeStyles((theme) => ({
    main: {
        height: '100vh',
        background: '#585858',
        color: '#ffffff',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    root: {
        flexGrow: 1,
    },
    gridRoot: {
        width: '100%',
        margin: 0,
    },
}));


let data = [
    {user: {name: 'name'}, link: '/login'},
    {user: {name: 'name'}, link: '/login'},
    {user: {name: 'name'}, link: '/login'},
    {user: {name: 'name'}, link: '/login'},
    {user: {name: 'name'}, link: '/'},
];

const AppRoot = () => {
    const {state, dispatch} = useContext(AppContext)

    const classes = useStyles()
    return (
       <main className={classes.main}>
           <div className={classes.root}>
                <Grid container spacing={3} classes={{root: classes.gridRoot}}>
                    {
                        _.map(data, (user, i) => (
                            <Grid item xs={4} key={i}>
                                <AppContent {...user} />
                            </Grid>
                        ))
                    }
                </Grid>
           </div>
       </main>
    )
}

const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducers, initialState);
    return <AppContext.Provider value={{state, dispatch}}>{children}</AppContext.Provider>
}

export const AppMain = () => {
    let { path, url } = useRouteMatch()

    const routes = [
        {
            path: `${url}/login`,
            component: Login,
        },
        {
            path: `${url}/signin`,
            component: SignIn,
        },
        {
            path: `${url}/mypage`,
            component: PrivatePage,
        },
        {
            path: url,
            component: AppRoot,
        },

    ];

    return(
        <Provider>
            <AppHeader />
            <Switch>
                {_.map(routes, (route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
            <AppFooter />
        </Provider>
    )
}