import React, { FC } from "react";
import { Avatar } from "@mui/material";

type Props = {
    name: string;
    surname: string;
}

const PlayerPortrait: FC<Props> = (props) => {
    const { name, surname } = props;

    return (
        <>
            <Avatar sx={{ width: 100, height: 100 }}>
            R
            </Avatar>
            <p >{name + " " + surname}</p>
        </>
    )
}

export default PlayerPortrait;