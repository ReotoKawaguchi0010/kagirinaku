import React, {useState, useContext} from "react";
import {makeStyles, Button, Input, IconButton, InputAdornment, Grid} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";

import {AppContext} from "../app_contexts/AppContext";
import {userAction} from "../actions/user_action";
import {LOGIN} from "../reducers";
import {sendAction} from "../utils/utils";

const useStyles = makeStyles((theme) => ({
    main: {
        height: '100vh',
        minHeight: '100%',
        background: '#585858',
        color: '#ffffff',
    },
    title: {
        textAlign: 'center'
    },
    usernameBlock: {
        textAlign: 'center',
    },
    usernameRoot: {
        width: '20em',
        margin: '20px 0',
        color: '#ffffff',
    },
    wrapForm: {
        justifyContent: 'center',
        verticalAlign: 'middle',
    },
    gridRoot: {
        width: '100%',
        margin: 0,
    },
}));




export const Login = ({params}) => {
    const classes = useStyles();

    const {state, dispatch} = useContext(AppContext)

    const [inputState, setInputState] = useState({
        type: 'password',
        data: {
            username: {
                error: false,
                errorMsg: '',
                value: '',
            },
            password: {
                error: false,
                errorMsg: '',
                value: '',
            },
        },
    });

    const handleChangeInput = (e) => {
        const data = {...inputState.data}
        switch (e.target.name){
            case 'username':
                data.username.value = e.target.value
                break
            case 'password':
                data.password.value = e.target.value
        }
        setInputState({...inputState, data: data})
    }

    const handleClickShowPass = () => {
        inputState.type === 'password' ? setInputState({...inputState, type: 'text'}) : setInputState({...inputState, type: 'password'})
    }

    const handleClickSubmit = () => {
        const sendData = {
            username: inputState.data.username.value,
            password: inputState.data.password.value,
        }

        userAction(sendAction(LOGIN, state, 'post', sendData), dispatch)

    }

    return (
        <main className={classes.main}>
            <Grid className={classes.wrapForm} container spacing={3} classes={{root: classes.gridRoot}}>
                <Grid item xs={12} xl={12}>
                    <h3 className={classes.title}>Login</h3>
                    <div className={classes.usernameBlock}>
                        <Input
                            required
                            placeholder="ユーザーネーム"
                            classes={{root: classes.usernameRoot}}
                            name="username"
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className={classes.usernameBlock}>
                        <Input
                            required
                            type={inputState.type}
                            placeholder="パスワード"
                            classes={{root: classes.usernameRoot}}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPass}
                                    >
                                        {inputState.type === 'password' ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            name="password"
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className={classes.usernameBlock}>
                        <Button variant="contained" color="primary" onClick={handleClickSubmit}>
                            ログイン
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </main>
    )
}