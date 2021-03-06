import React, {useState, useContext} from "react";
import {makeStyles, Button, Input, IconButton, InputAdornment, Grid} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import _ from "lodash";

import {create} from "../config/config";

const pcStyles = theme => ({
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
    errorMsg: {

    },
})

const mobStyles = theme => ({
    usernameBlock: {
        textAlign: 'center',
    },

})

const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.between('md', 'xl')]: pcStyles(theme),
    [theme.breakpoints.between('xs', 'md')]: mobStyles(theme),
}));




export const SignIn = () => {
    const classes = useStyles();
    const [sendState, setSendState] = useState({
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
            email: {
                error: false,
                errorMsg: '',
                value: '',
            },
        },
    });

    const handleClickShowPass = () => {
        sendState.type === 'password' ? setSendState({...sendState, type: 'text'}) : setSendState({...sendState, type: 'password'})
    }

    const handleChangeInput = (e) => {
        const data = {...sendState.data}
        switch (e.target.name){
            case 'username':
                data.username.value = e.target.value
                break
            case 'password':
                data.password.value = e.target.value
                break
            case 'email':
                data.email.value = e.target.value
        }
        setSendState({...sendState, data: data})
    }

    const handleClickSend = () => {
        const stateData = {...sendState.data}
        _.map(state.data, (data, key) => {
            if(data.value === ''){
                stateData[key].error = true
                stateData[key].errorMsg = '入力してください'
            }else{
                stateData[key].error = false
            }
        })
        setSendState({...sendState, stateData})
        const sendData = {
            username: sendState.data.username.value,
            password: sendState.data.password.value,
            email: sendState.data.email.value
        }
        create.post('/signin', sendData).then((resp) => {
            console.log(resp)
        })
    }

    return (
        <main className={classes.main}>
            <Grid className={classes.wrapForm} container spacing={3} classes={{root: classes.gridRoot}}>
                <Grid item xs={12} xl={12}>
                    <h3 className={classes.title}>Signin</h3>
                    <div className={classes.usernameBlock}>
                        <Input
                            required
                            placeholder="ユーザーネーム"
                            classes={{root: classes.usernameRoot}}
                            onChange={handleChangeInput}
                            name='username'
                            error={sendState.data.username.error}
                        />
                        {sendState.data.username.error ? sendState.data.username.errorMsg: false}
                    </div>
                    <div className={classes.usernameBlock}>
                        <Input
                            required
                            type={sendState.type}
                            placeholder="パスワード"
                            classes={{root: classes.usernameRoot}}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPass}
                                    >
                                        {sendState.type === 'password' ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            onChange={handleChangeInput}
                            name='password'
                        />
                    </div>
                    <div className={classes.usernameBlock}>
                        <Input
                            required
                            type={'email'}
                            placeholder='メールアドレス'
                            classes={{root: classes.usernameRoot}}
                            onChange={handleChangeInput}
                            name='email'
                        />
                    </div>
                    <div className={classes.usernameBlock}>
                        <Button variant="contained" color="primary" onClick={handleClickSend}>
                            サインイン
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </main>
    )
}