import React from 'react';
import { deepOrange } from '@material-ui/core/colors';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import LanguageIcon from '@material-ui/icons/Language';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        orange: {
            color: theme.palette.getContrastText(deepOrange[500]),
            backgroundColor: deepOrange[500]
        },
        inline: {
            display: 'inline',
        }
    })
);

interface TransactionProps {
    actor: string,
    target: string,
    description: string,
    createTime: string,
    userInitials: string;
}

const Transaction = ({actor, target, description, createTime, userInitials}: TransactionProps) => {
    const classes = useStyles();

    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar className={classes.orange}>{userInitials}</Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={`${actor} bet ${target} - $5.00`}
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            {description}
                        </Typography>
                        <br/>
                        {createTime}{" "}<LanguageIcon fontSize="small"/>
                    </React.Fragment>
                }
            />
        </ListItem>
    );
}

export default Transaction;
