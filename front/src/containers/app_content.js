import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Avatar,
    Box,
    Card,
    CardHeader,
    CardContent
} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

const pcStyles = theme => {
    return {
        avatar: {
            backgroundColor: '#0f0f0f',
        },
    }
}

const mobStyles = theme => {
    return {

    }
}
const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.between('md', 'xl')]: pcStyles(theme),
    [theme.breakpoints.between('xs', 'md')]: mobStyles(theme),
}));

const avatarHeadText = (name) => {
    return name[0].toUpperCase();
}


export const AppContent = (data={}) => {
    const classes = useStyles();


    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {avatarHeadText(data.user.name)}
                    </Avatar>
                }
                title={
                    <Link to={`/scenarios${data.link}`}>{data.user.name}</Link>
                }
            />
            <CardContent>
                <Box>text</Box>
            </CardContent>
        </Card>
    )
}