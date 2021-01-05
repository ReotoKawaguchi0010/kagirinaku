import React, {useState, useEffect} from "react";
import {Redirect} from "react-router";
import {Button} from "@material-ui/core";


export const PrivatePage = (props) => {
    const params = props.match.params;

    const [state, setState] = useState({
        login: false,
    })

    return (
        <React.Fragment>
            {state.login}
            <h3>マイページ</h3>
            <Button onClick={handleClick}>ログアウト</Button>
        </React.Fragment>
        )
}




