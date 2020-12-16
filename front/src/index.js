import React from "react"
import ReactDom from "react-dom"
import "./styles/index.css"

import {Routing} from "./routings/routings";

ReactDom.render(
    <React.Fragment>
        <Routing />
    </React.Fragment>,
    document.getElementById('root')
)