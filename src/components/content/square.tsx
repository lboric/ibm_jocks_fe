import React, { FC } from 'react'
import { createStyles, makeStyles } from "@mui/styles";
import { Colors } from "../../enums/colors";

const useStyles = makeStyles(() =>
    createStyles({
        square: {
            width: '100%',
            height: '100%',
            backgroundColor: Colors.PITCH_GREEN,
            textAlign: 'center'
        }
    })
);

type Props = {
    children?: React.ReactNode;
}

const Square: FC<Props> = (props) => {
    const { children } = props;
    const classes = useStyles();

    return (
        <div className={classes.square}>
            {children}
        </div>
    )
}

export default Square