import React, {useState} from "react";
import {makeStyles, Button, Input, IconButton, InputAdornment, Grid} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";
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




export const Login = ({params}) => {
    const classes = useStyles();
    const [state, setState] = useState({
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
        const data = {...state.data}
        switch (e.target.name){
            case 'username':
                data.username.value = e.target.value
                break
            case 'password':
                data.password.value = e.target.value
        }
        setState({...state, data: data})
    }


    const handleClickShowPass = () => {
        state.type === 'password' ? setState({...state, type: 'text'}) : setState({...state, type: 'password'})
    }

    const handleClickSubmit = () => {
        const sendData = {
            username: state.data.username.value,
            password: state.data.password.value,
        }

        create.post('/login', sendData).then(resp => {
            console.log(resp)
        })
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
                            type={state.type}
                            placeholder="パスワード"
                            classes={{root: classes.usernameRoot}}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPass}
                                    >
                                        {state.type === 'password' ? <VisibilityOff /> : <Visibility />}
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