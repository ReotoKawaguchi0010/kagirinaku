import React, { useState } from "react";
import {makeStyles} from "@material-ui/core";

const pcStyles = {
    main: {
        background: '#DE9927',
    },
    topImage: {

    },
}

const mobStyles = {
    main: {
        background: '#DE9927',
    },
    topImage: {

    },
}

const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.between('md', 'xl')]: pcStyles,
    [theme.breakpoints.between('xs', 'md')]: mobStyles,
}));

export const Main = () => {
    const classes = useStyles()
    return(
        <React.Fragment>
            <main className={classes.main}>
                <div>
                    test
                </div>
            </main>
        </React.Fragment>
    )
}