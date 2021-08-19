import React from 'react';
import {TransactionData} from "../../screens/Landing";
import Transaction from "./Transaction";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Divider, List} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: '54ch',
            backgroundColor: theme.palette.background.paper,
        }
    }),
);

interface TransactionFeedProps {
    transactionArr: TransactionData[]
}

const TransactionFeed = ({transactionArr}: TransactionFeedProps) => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {transactionArr.length > 0 && transactionArr.map((transaction) =>
                <div key={transaction.description}>
                    <Transaction
                        actor={transaction.actor}
                        target={transaction.target}
                        description={transaction.description}
                        createTime={transaction.createTime}
                        userInitials={transaction.userInitials}
                    />
                    <Divider variant="inset" component="li" />
                </div>
            )}
        </List>
    )
}

export default TransactionFeed;
