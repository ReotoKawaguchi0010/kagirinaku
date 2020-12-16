import React, { useState } from "react";
import {makeStyles, Paper, Grid, TextField} from "@material-ui/core";
import _ from "lodash";

import {AppFooter} from "./footer";
import {AppHeader} from "./header";
import {RouteWithSubRoutes} from "../routings/routings";
import {Switch} from "react-router-dom";
import {Login} from "../containers/app_login";

const pcStyles = theme => ({
    main: {
        height: '2000px',
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
        background: '#DE9927',
    },

})

const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.between('md', 'xl')]: pcStyles(theme),
    [theme.breakpoints.between('xs', 'md')]: mobStyles(theme),
}));


let data = [
    {'name': 'name', 'link': 'http://localhost:3000'},
    {'name': 'name1', 'link': 'http://localhost:3000'},
    {'name': 'name2', 'link': 'http://localhost:3000'},
    {'name': 'name3', 'link': 'http://localhost:3000'},
    {'name': 'name4', 'link': 'http://localhost:3000'},
];

data = JSON.stringify(data)

const AppRoot = () => {
    const classes = useStyles()

    return (
       <main className={classes.main}>
           <div className={classes.root}>
                <Grid container spacing={3} classes={{root: classes.gridRoot}}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>test</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>test</Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>test</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>test</Paper>
                    </Grid>
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