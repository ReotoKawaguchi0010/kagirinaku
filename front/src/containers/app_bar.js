import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import {create} from "../config/config";

const pcStyles = theme => {
    return {
        root: {
            flexGrow: 1,
            background: '#DE9927',
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
              backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
              marginLeft: theme.spacing(1),
              width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                }
            }
        },
        link: {
            textDecoration: 'none',
            color: 'initial',
        },
        iconButton: {
            width: '7%',
        },
        svg: {
            width: '100%',
        },
        logo: {
            fill:'#ffffff',
            stroke:'#494949',
            strokeMiterlimit:'10',
        },
    }
}

const mobStyles = theme => {
    return {
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }
}

const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.between('md', 'xl')]: pcStyles(theme),
    [theme.breakpoints.between('xs', 'md')]: mobStyles(theme),
}));

const LoginComp = (bool) => {
    const classes = useStyles();

    if(!bool.bool){
        return <Button color="inherit"><Link to='/scenarios/login' className={classes.link}>ログイン</Link></Button>
    }else{
        return (
            <div>ログイン済</div>
        )
    }
}

export const HeaderBar = () => {
    const classes = useStyles()

    const [state, setState] = useState({
        isLogin: false,
    });

    useEffect(() => {
        create.get('/login').then((resp) => {
            if(resp.data.login === 'true'){
                setState({...state, isLogin: true})
            }else{
                setState({...state, isLogin: false})
            }
        })
    }, [])

    return(
        <React.Fragment>
            <div className={classes.root}>
                <AppBar position="static" color="default" style={{background: '#DE9927'}}>
                    <Toolbar>
                        <Button className={classes.iconButton}>
                            <Link to="/scenarios">
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
                            </Link>
                        </Button>
                        <div className={classes.search}>
                            <div><SearchIcon className={classes.searchIcon} /></div>
                            <InputBase
                                placeholder="Search..."
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <Typography variant="h6" className={classes.title}>

                        </Typography>
                        <LoginComp bool={state.isLogin} />
                    </Toolbar>
                </AppBar>
            </div>
        </React.Fragment>
    )
}