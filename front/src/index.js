import React from "react"
import ReactDom from "react-dom"
import "./styles/index.css"

import {Main} from "./components/main";
import {Footer} from "./components/footer";
import {Header} from "./components/header";

ReactDom.render(
    <React.Fragment>
        <Header />
        <Main />
        <Footer />
    </React.Fragment>,
    document.getElementById('root')
)