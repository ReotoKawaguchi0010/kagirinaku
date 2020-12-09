import React, { useState } from "react";
import {makeStyles} from "@material-ui/core";

const pcStyles = {
    copyRight: {
        textAlign: 'center',
        fontSize: '12px',
    },
}

const mobStyles = {
}

const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.between('md', 'xl')]: pcStyles,
    [theme.breakpoints.between('xs', 'md')]: mobStyles,
}));

export const Footer = () => {
    const classes = useStyles();

    return(
        <React.Fragment>
            <footer>
                <div className={classes.copyRight}>Copyright Kagirinaku-engekini-tikai-engeki</div>
            </footer>
        </React.Fragment>
    )
}