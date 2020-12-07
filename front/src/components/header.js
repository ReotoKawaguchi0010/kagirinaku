import React, { useState } from "react";
import {makeStyles} from "@material-ui/core";

const pcStyles = {
    main: {
        background: '#DE9927',
    },
    topImage: {

    },
    groupName: {},
    catchCopy: {},
}

const mobStyles = {
    main: {
        background: '#DE9927',
    },
    topImage: {

    },
    groupName: {},
    catchCopy: {},
}

const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.between('md', 'xl')]: pcStyles,
    [theme.breakpoints.between('xs', 'md')]: mobStyles,
}));

export const Header = () => {
    const classes = useStyles()

    return(
        <React.Fragment>
            <header>
                <div className={classes.topImage}>
                    <h1 className={classes.groupName}>限りなく演劇に近いコント</h1>
                    <h2 className={classes.catchCopy}><div>No Fiction!</div><div>No Life!</div></h2>
                </div>
            </header>
        </React.Fragment>
    )
}