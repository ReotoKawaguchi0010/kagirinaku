import React, { useState } from "react";
import {
    makeStyles,
    Grid,
} from "@material-ui/core";
import _ from "lodash";

import {AppFooter} from "./footer";
import {AppHeader} from "./header";
import {RouteWithSubRoutes} from "../routings/routings";
import {Switch} from "react-router-dom";
import {Login} from "../containers/app_login";
import {AppContent} from "../containers/app_content";
import {PrivatePage} from "../containers/private_page";
import {SignIn} from "../containers/app_signin";

const pcStyles = theme => ({
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
})

const mobStyles = theme => ({
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
})

const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.between('md', 'xl')]: pcStyles(theme),
    [theme.breakpoints.between('xs', 'md')]: mobStyles(theme),
}));


let data = [
    {user: {name: 'name'}, 'link': '/login'},
    {user: {name: 'name'}, 'link': '/login'},
    {user: {name: 'name'}, 'link': '/login'},
    {user: {name: 'name'}, 'link': '/login'},
    {user: {name: 'name'}, 'link': '/'},
];

const AppRoot = () => {
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

const routes = [
    {
        path: '/scenarios/login',
        component: Login,
    },
    {
        path: '/scenarios/signin',
        component: SignIn,
    },
    {
        path: '/scenarios/mypage/:id',
        component: PrivatePage,
    },
    {
        path: "/scenarios",
        component: AppRoot,
    },

];

export const AppMain = () => {
    return(
        <React.Fragment>
            <AppHeader />
            <Switch>
                {_.map(routes, (route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
            <AppFooter />
        </React.Fragment>
    )
}