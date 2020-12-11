import React, { useState } from "react";
import {makeStyles} from "@material-ui/core";

import headerImage from "../../images/kagirinaku_header.jpg";

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

export const Header = () => {
    const classes = useStyles()

    return(
        <React.Fragment>
            <header>
                <div className={classes.figure}>
                    <div><img src={headerImage} alt='headerImage' className={classes.headerImage} /></div>
                    <div className={classes.topImage}>
                    <h1 className={classes.groupName}>限りなく演劇に近いコント</h1>
                    <h2 className={classes.catchCopy}><div>No Fiction!</div><div>No Life!</div></h2>
                </div>
                </div>

            </header>
        </React.Fragment>
    )
}