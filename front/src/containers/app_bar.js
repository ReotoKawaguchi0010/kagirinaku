import React, { useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { fade, makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button, InputBase} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import {AppContext} from "../app_contexts/AppContext";
import {Logo} from "../icons/logo";

import {userAction} from "../actions/user_action";

const useStyles = makeStyles((theme) => ({
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
}));

const LoginComp = () => {
    const classes = useStyles();
    return <Button color="inherit"><Link to='/scenarios/login' className={classes.link}>ログイン</Link></Button>
}

const SignInComp = () => {
    const classes = useStyles()
    return <Button color="inherit"><Link to='/scenarios/signin' className={classes.link}>サインイン</Link></Button>
}

const LoggedComp = () => {
    const {state, dispatch} = useContext(AppContext)

    return (
        <>
            <Button><AccountCircleIcon /></Button>
        </>
    )
}

export const HeaderBar = () => {
    const {state, dispatch} =  useContext(AppContext)
    useEffect(() => {
        userAction({type: 'userInitial'}, dispatch)
    }, [])

    const classes = useStyles()

    console.log(state)

    return(
        <React.Fragment>
            <div className={classes.root}>
                <AppBar position="static" color="default" style={{background: '#DE9927'}}>
                    <Toolbar>
                        <Button className={classes.iconButton}>
                            <Link to="/scenarios">
                                <Logo />
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
                        <SignInComp />
                        <LoginComp />
                    </Toolbar>
                </AppBar>
            </div>
        </React.Fragment>
    )
}