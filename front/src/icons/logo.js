import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    svg: {
        width: '100%',
    },
    logo: {
        fill:'#ffffff',
        stroke:'#494949',
        strokeMiterlimit:'10',
    },
}));

export const Logo = () => {
    const classes = useStyles()

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 687.76 375.96" className={classes.svg}>
            <g>
                <polygon className={classes.logo}
                         points="0.5 375.46 1 214.79 219.25 158.74 219.25 0.5 475.25 0.5 475.25 158.74 685.6 214.79 687.25 375.46 0.5 375.46"/>
                <circle className={classes.logo} cx="540.01" cy="79.62" r="50"/>
                <circle className={classes.logo} cx="147.74" cy="75.79" r="50"/>
                <circle className={classes.logo} cx="343.88" cy="79.62" r="50"/>
                <line className={classes.logo} x1="1" y1="214.79" x2="685.6" y2="214.79"/>
                <line className={classes.logo} x1="219.25" y1="158.74" x2="475.25" y2="158.74"/>
            </g>
        </svg>
    )
}