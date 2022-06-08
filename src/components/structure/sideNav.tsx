import React from "react";
import {
    Divider,
    List,
    ListItem,
    ListItemText
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { ArrowForwardIos, TableRows, PeopleOutline} from "@mui/icons-material";

const useStyles = makeStyles((theme) =>
    createStyles({
        menu: {
            width: "100%",
            height: "125vh",
            backgroundColor: "#1976d2",
            color: "white",
            position: "relative",
            top: 0
        },
        menuIcon: {
            marginRight: "20px"
        },
        selected: {
            color: "primary"
        }
    })
);

const SideNav: React.FC<{}> = () => {
    const classes = useStyles();

    return (
        <List component="nav" aria-labelledby="nested-list-subheader" className={classes.menu}>
            <Divider />
            <ListItem button component={Link} to="/">
                <TableRows className={classes.menuIcon}/>
                <ListItemText primary="Leaderboard" />
                <ArrowForwardIos />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to="/players">
                <PeopleOutline className={classes.menuIcon}/>
                <ListItemText primary="Players" />
                <ArrowForwardIos />
            </ListItem>
            <Divider />
        </List>
    );
}

export default SideNav;
