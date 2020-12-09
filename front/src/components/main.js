import React, { useState } from "react";
import {makeStyles} from "@material-ui/core";

const pcStyles = {
    main: {
        background: '#DE9927',
    },
    topImage: {},
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
            <main className={classes.main}>
                <div>
                    <div>
                        <div>限りなく演劇に近いコント</div>
                        <div>testtesttesttesttesttesttesttesttesttesttesttesttesttesttest</div>
                    </div>
                    <div>
                        <div>おおつか</div>
                        <div>testtesttesttesttesttesttesttesttesttesttesttest</div>
                    </div>
                    <div>
                        <div>かわぐち</div>
                        <div>testtesttesttesttesttesttesttesttesttesttesttest</div>
                    </div>
                    <div>
                        <div>みやもと</div>
                        <div>testtesttesttesttesttesttesttesttesttesttesttest</div>
                    </div>
                    <div>
                        <div>お問い合わせ</div>
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
        </React.Fragment>
    )
}