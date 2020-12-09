import React from "react"
import ReactDom from "react-dom"
import "./styles/index.css"

import Routeing from "./routings/routings";

ReactDom.render(
    <React.Fragment>
        <Routeing />
    </React.Fragment>,
    document.getElementById('root')
)