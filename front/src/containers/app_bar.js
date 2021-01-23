import React, {useEffect, useContext, useState} from "react";
import { Link } from "react-router-dom";
import { fade, makeStyles } from '@material-ui/core/styles';
import {
    AppBar, Toolbar, Typography,
    Button, InputBase, Avatar,
    MenuItem, Modal, Card, Select, Box,
    Backdrop
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import CreateIcon from '@material-ui/icons/Create';

import {AppContext} from "../app_contexts/AppContext";
import {Logo} from "../icons/logo";

import {userAction} from "../actions/user_action";
import {sendAction} from "../utils/utils";

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
    selectWritingModeBox : {
        textAlign: 'right',
        paddingLeft: 20,
        marginBottom: 20,
    },
    closeButtonBox: {
        marginTop: 20,
        textAlign: 'center',
    },
    editTextBox: {
        border: 'solid 1px',
        borderColor: '#000000',
        height: '21em',
        width: '100%',
        overflowWrap: 'break-word',
    },
}));

const AfterLogin = () => {
    const classes = useStyles()
    const {state, dispatch} =  useContext(AppContext)
    const [modalState, setModalState] = useState({
        open: false
    })
    const [writeState, setWriteState] = useState({
        contentEdiTable: true,
        writeMode: 'vertical-rl',
        selectWriteMode: 1,
    })


    const handleOpenClick = () => {
        setModalState({...modalState, open: true})
    }

    const handleCloseEvent = () => {
        setModalState({...modalState, open: false})
    }

    const handleSelectChange = e => {
        let writeMode
        Boolean(e.target.value) ? writeMode = 'vertical-rl' : writeMode = ''
        setWriteState({...writeState, selectWriteMode: e.target.value, writeMode: writeMode})
    }

    const AppBackDrop = () => {
        return (
            <>
                <Backdrop open={true} transitionDuration={0} style={{backgroundColor: 'rgb(222, 153, 39, 0.2)'}} />
            </>
        )
    }

    return (
        <>
            <Modal BackdropComponent={AppBackDrop} BackdropProps={{timeout: 10}} open={modalState.open} style={{padding: 20}}>
                <Card tabIndex="initial">
                    <Box className={classes.selectWritingModeBox}>
                        <Select onChange={handleSelectChange} value={writeState.selectWriteMode}>
                            <MenuItem value={0}>横書き</MenuItem>
                            <MenuItem value={1}>縦書き</MenuItem>
                        </Select>
                    </Box>
                    <Typography
                        className={classes.editTextBox}
                        tabIndex="initial"
                        style={{writingMode: writeState.writeMode}}
                        contentEditable={writeState.contentEdiTable}
                    />
                    <Box className={classes.closeButtonBox}><Button onClick={handleCloseEvent}>閉じる</Button></Box>
                </Card>
            </Modal>
            <Avatar>{state.userReducer.user.username ? state.userReducer.user.username[0] : ''}</Avatar>
            <Button onClick={handleOpenClick}><CreateIcon /></Button>
        </>
    )
}


const BeforeLogin = () => {
    const classes = useStyles()
    return (
        <>
            <Button color="inherit"><Link to='/scenarios/login' className={classes.link}>ログイン</Link></Button>
            <Button color="inherit"><Link to='/scenarios/signin' className={classes.link}>サインイン</Link></Button>
        </>
    )
}


export const HeaderBar = () => {
    const {state, dispatch} =  useContext(AppContext)
    useEffect(() => {
        userAction(sendAction('userInitial', state, 'get'), dispatch)
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
                        {
                            state.userReducer.login ? (
                                <>
                                    <AfterLogin />
                                </>
                            ) : (
                                <>
                                    <BeforeLogin />
                                </>
                            )
                        }
                    </Toolbar>
                </AppBar>
            </div>
        </React.Fragment>
    )
}