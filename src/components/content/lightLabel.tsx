import React from "react";
import { Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { FontVariant } from "../../enums/fontVariant";

const useStyles = makeStyles(() =>
    createStyles({
        font: {
            color: "black",
            fontSize: 25,
            textAlign: "left"
        },
    })
);

type Props = {
    variant: FontVariant;
    children?: React.ReactNode;
}

const LightLabel: React.FC<Props> = (props: Props) => {
    const classes = useStyles();

    return (
        <Typography
            className={classes.font}
            variant={props.variant}
            noWrap
        >
            {props.children}
        </Typography>
    );
};

export default LightLabel;