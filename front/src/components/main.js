import React, { useState } from "react";
import {makeStyles} from "@material-ui/core";

import {Footer} from "./footer";
import {Header} from "./header";

import bodyBackground from "../../images/body_background.jpg";

const pcStyles = {
    main: {

    },
    topImage: {},
    backgroundImg: {
        width: '100vw',
        height: '100vh',
        display: 'block',
    },
    body: {
        position: 'absolute',
        top: 950,
        padding: '0 100px',
        color: '#F8F8F8',
        width: '100%',
    },
    title: {
        fontSize: 40,
    },
    text: {
        fontSize: 21,
    }

}

const mobStyles = {
}

const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.between('md', 'xl')]: pcStyles,
    [theme.breakpoints.between('xs', 'md')]: mobStyles,
}));

export const Main = () => {
    const classes = useStyles()
    return(
        <React.Fragment>
            <Header />
            <main className={classes.main}>
                <img src={bodyBackground} alt="bodyBackground" className={classes.backgroundImg} />
                <div className={classes.body}>
                    <div>
                        <div className={classes.title}>限りなく演劇に近いコントとは</div>
                        <div className={classes.text}>testtesttesttesttesttesttesttesttesttesttesttesttesttesttest</div>
                    </div>
                    <div>
                        <div className={classes.title}>おおつか</div>
                        <div className={classes.text}>testtesttesttesttesttesttesttesttesttesttesttest</div>
                    </div>
                    <div>
                        <div className={classes.title}>かわぐち</div>
                        <div className={classes.text}>testtesttesttesttesttesttesttesttesttesttesttest</div>
                    </div>
                    <div>
                        <div className={classes.title}>みやもと</div>
                        <div className={classes.text}>testtesttesttesttesttesttesttesttesttesttesttest</div>
                    </div>
                    <div>
                        <div className={classes.title}>活動内容</div>
                        <div className={classes.text}>testtesttesttesttesttesttesttesttesttesttesttest</div>
                    </div>
                    <div>
                        <div className={classes.title}>お問い合わせ</div>
                        <div>
                            <form>
                                <div>お名前<input name="name" id="name"  /></div>
                                <div>メールアドレス<input name="mail_address" id="main_address"  /></div>
                                <div>お問い合わせ内容<input name="contact" id="contact"  /></div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </React.Fragment>
    )
}