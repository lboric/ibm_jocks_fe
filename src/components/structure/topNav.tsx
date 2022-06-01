import React from "react";
import {
    AppBar,
    Avatar,
    Badge,
    Button,
    CardHeader,
    IconButton,
    Toolbar,
    Theme
} from "@mui/material";
import { Notifications } from "@mui/icons-material";
import { createStyles, makeStyles } from "@mui/styles";

import LightLabel from "../content/lightLabel";

import footballLogo from '../../static/football.png'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1,
            anchor: "top"
        },
        notifications: {
            paddingRight: 20
        }
    })
);

const TopNav: React.FC<{}> = () => {
    const classes = useStyles();

    return(
        <AppBar position="static" color="primary">
            <Toolbar disableGutters>
                <Button>
                    <CardHeader
                        avatar={
                            <Avatar color="primary" src={footballLogo} />
                        }
                        title={
                            <LightLabel variant={"h4"}>
                                IBM iX Zagreb
                            </LightLabel>
                        }
                        subheader={
                            <LightLabel variant={"h6"}>
                                Football
                            </LightLabel>
                        }
                    />
                </Button>
                <div className={classes.grow} />
                <div className={classes.notifications}>
                    <IconButton aria-label="show 4 new notifications" color="inherit">
                        <Badge badgeContent={4} color="primary">
                            <Notifications />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default TopNav;