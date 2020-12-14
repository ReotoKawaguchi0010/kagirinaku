import React, { useState } from "react";
import {makeStyles} from "@material-ui/core";

const pcStyles = {
    main: {
        background: '#DE9927',
    },
    topImage: {

    },
    groupName: {
        position: 'absolute',
        top: 350,
        textAlign: 'center',
    },
    catchCopy: {
        position: 'absolute',
        top: 825,
        textAlign: 'center',
    },
    figure: {
        margin: 0,
        position: 'relative',
    },
    headerImage: {
        width: '100vw',
        height: '100vh',
        display: 'block',
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

export const AppFooter = () => {
    const classes = useStyles()

    return(
        <React.Fragment>
            <footer>footer</footer>
        </React.Fragment>
    )
}