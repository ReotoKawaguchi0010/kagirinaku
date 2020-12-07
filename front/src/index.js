import React from "react"
import ReactDom from "react-dom"
import { BrowserRouter } from "react-router-dom";

ReactDom.render(
    <React.Fragment>
        <BrowserRouter>
            <div>hello world</div>
        </BrowserRouter>
    </React.Fragment>,
    document.getElementById('root')
)