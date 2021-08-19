import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TransactionFeed from "../components/landing/TransactionFeed";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            overflow: 'hidden',
            padding: theme.spacing(0, 3),
        },
        paper: {
            maxWidth: 400,
            margin: `${theme.spacing(1)}px auto`,
            padding: theme.spacing(2),
        },
    }),
);

export type TransactionData = {
    actor: string,
    target: string,
    description: string,
    userInitials: string,
    createTime: string
}

const transactions: TransactionData[] = [
    {
        actor: "Morgan Jones",
        target: "Olaf S",
        description: "Luka Doncic is going to fall off this year",
        userInitials: "MJ",
        createTime: new Date().toLocaleString()
    },
    {
        actor: "Mark Meredith",
        target: "Austin Jones",
        description: "Ol Mo will take longer than 2hrs to arrive",
        userInitials: "MM",
        createTime: new Date().toLocaleString()
    }
]

export default function LandingPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <TransactionFeed transactionArr={transactions} />
                </Grid>
            </Paper>
        </div>
    )
}

