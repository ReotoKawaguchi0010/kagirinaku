import React from "react";

import {Main} from "./components/main";
import {Footer} from "./components/footer";
import {Header} from "./components/header";

export default class App extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Header />
                <Main />
                <Footer />
            </React.Fragment>
        )
    }

}