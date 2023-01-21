import React from "react";
import { Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { Fonts } from "../../../enums/fonts";

const useStyles = makeStyles(() =>
    createStyles({
        fontLeft: {
            color: "black",
            fontSize: 25,
            textAlign: "left",
            marginBottom: "50px",
        },
        fontRight: {
            color: "black",
            fontSize: 25,
            textAlign: "right",
            marginBottom: "50px",
        },
    })
);

type Props = {
    variant: Fonts;
    children?: React.ReactNode;
    alignRight?: boolean;
}

const DarkLabel: React.FC<Props> = (props) => {
    const classes = useStyles();

    return (
        <Typography className={props.alignRight ? classes.fontRight : classes.fontLeft} variant={props.variant} noWrap>
            {props.children}
        </Typography>
    );
};

export default DarkLabel;