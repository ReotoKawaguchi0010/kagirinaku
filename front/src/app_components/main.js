import React, { useState } from "react";
import {makeStyles} from "@material-ui/core";
import _ from "lodash";

import {AppFooter} from "./footer";
import {AppHeader} from "./header";

const pcStyles = {
    main: {
        height: '2000px',
        background: '#585858',
        color: '#ffffff'
    },
}

const mobStyles = {
    main: {
        background: '#DE9927',
    },

}

const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.between('md', 'xl')]: pcStyles,
    [theme.breakpoints.between('xs', 'md')]: mobStyles,
}));


let data = [
    {'name': 'name', 'link': 'http://localhost:3000'},
    {'name': 'name1', 'link': 'http://localhost:3000'},
    {'name': 'name2', 'link': 'http://localhost:3000'},
    {'name': 'name3', 'link': 'http://localhost:3000'},
    {'name': 'name4', 'link': 'http://localhost:3000'},
];

data = JSON.stringify(data)




const Main = () => {
    const classes = useStyles()
    console.log(JSON.parse(data))
    return (
       <main className={classes.main}>
       </main>
    )
}






export const AppMain = () => {
    return(
        <React.Fragment>
            <AppHeader />
            <Main />
            <AppFooter />
        </React.Fragment>
    )
}