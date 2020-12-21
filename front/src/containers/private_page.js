import React, {useState, useEffect} from "react";
import {Redirect} from "react-router";
import {Button} from "@material-ui/core";

import {create} from "../config/config";

export const PrivatePage = (props) => {
    const params = props.match.params;

    const [state, setState] = useState({
        login: false,
    })

    useEffect(() => {
        create.get('/login').then((resp) => {
            resp.data.login !== 'true' ? setState({...state, login: <Redirect to='/scenarios/login' />}): setState({...state, login: true})
        })
    }, [])

    const handleClick = (e) => {
        create.post('/logout').then(resp => {
            setState({...state, login: <Redirect to='/scenarios/login' />})
        })
    }

    return (
        <React.Fragment>
            {state.login}
            <h3>マイページ</h3>
            <Button onClick={handleClick}>ログアウト</Button>
        </React.Fragment>
        )
}




