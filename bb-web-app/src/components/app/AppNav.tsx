import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import PublicIcon from '@material-ui/icons/Public';
import PeopleIcon from '@material-ui/icons/People';
import UpdateIcon from '@material-ui/icons/Update';
import {Grid, Tab, Tabs} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        appBar: {
            alignItems: "stretch"
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        }
    }),
);

const AppNav: React.FC = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static" color="default">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Blackout Bets
                    </Typography>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="standard"
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab icon={<PublicIcon />} />
                        <Tab icon={<UpdateIcon />} />
                        <Tab icon={<PeopleIcon />} disabled={true} />
                    </Tabs>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default AppNav;
