import React from "react";
import { Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { Fonts } from "../../../enums/fonts";

const useStyles = makeStyles(() =>
    createStyles({
        font: {
            color: "white",
            textAlign: "left",
            fontFamily: "Arial",
            border: "52px"
        }
    })
);

type Props = {
    variant: Fonts;
    children?: React.ReactNode;
}

const LightLabel: React.FC<Props> = (props) => {
    const classes = useStyles();

    return (
        <Typography className={classes.font} variant={props.variant} noWrap>
            {props.children}
        </Typography>
    );
};

export default LightLabel;