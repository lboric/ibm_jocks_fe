import React, { FC } from "react";
import { Avatar, Card } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { FontVariant } from "../../enums/fontVariant";
import DarkLabel from "./labels/darkLabel";

const useStyles = makeStyles(() =>
    createStyles({
        card: {
            width: 200,
            height: 250,
            padding: "20px",
        }
    })
);

type Props = {
    name: string;
    surname: string;
}

const PlayerPortrait: FC<Props> = (props) => {
    const classes = useStyles();
    const { name, surname } = props;

    const concatNameSurname = (name: string, surname: string) => {
        return name + ' ' + surname;
    }

    return (
        <>
            <Card className={classes.card}>
                <Avatar sx={{ margin: '10px', width: '150px', height: '150px' }}>
                    R
                </Avatar>
                <DarkLabel variant={FontVariant.H6}>
                    <div style={{textAlign: 'center'}}>{concatNameSurname(name, surname)}</div>
                </DarkLabel>
            </Card>

        </>
    )
}

export default PlayerPortrait;