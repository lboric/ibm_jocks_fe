import React from "react";
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
    createStyles({
        menu: {
            width: "100%",
            height: "100vh",
            backgroundColor: "#64b5f6",
            color: "white",
            position: "relative",
            top: 0
        },
        selected: {
            color: "primary"
        }
    })
);

const SideNav: React.FC<{}> = () => {
    const classes = useStyles();

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.menu}
        >
            <ListItem button>
                <ListItemIcon />
                <ListItemText primary="MENU ITEM 1" />
            </ListItem>
            <ListItem button>
                <ListItemIcon />
                <ListItemText primary="MENU ITEM 2" />
            </ListItem>
            <ListItem button>
                <ListItemIcon />
                <ListItemText primary="MENU ITEM 3" />
            </ListItem>
        </List>
    );
}

export default SideNav;
