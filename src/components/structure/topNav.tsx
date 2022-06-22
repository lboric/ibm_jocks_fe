import React from "react";
import {
    AppBar,
    Avatar,
    Badge,
    Button,
    CardHeader,
    IconButton,
    Toolbar
} from "@mui/material";
import { Notifications } from "@mui/icons-material";
import { createStyles, makeStyles } from "@mui/styles";
import LightLabel from "../content/labels/lightLabel";
import footballLogo from '../../static/football.png'
import goalLogo from '../../static/goal.png'
import { FontVariant } from "../../enums/fontVariant";

const useStyles = makeStyles(() =>
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

const TopNav = () => {
    const classes = useStyles();

    return(
        <AppBar position="static" color="primary">
            <Toolbar disableGutters>
                <Button>
                    <CardHeader
                        avatar={<Avatar sx={{ height: '50px', width: '50px', backgroundColor: 'blue' }} color="primary" src={footballLogo} />}
                        title={<LightLabel variant={FontVariant.H5}>___IBM iX Zagreb</LightLabel>}
                        subheader={<LightLabel variant={FontVariant.H6}>Football________</LightLabel>}
                    />
                    <Avatar variant="rounded" sx={{ height: '70px', width: '80px'}} color="primary" src={goalLogo} />
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