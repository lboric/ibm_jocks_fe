import React, { FC } from 'react'
import { useDrag } from "react-dnd";
import { Avatar } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { ItemTypes } from "../../enums/itemTypes";
import football from "../../static/football.png";

const useStyles = makeStyles(() =>
    createStyles({
        player: {
            fontWeight: 'bold',
            cursor: 'move',
            width: '35px!important',
            height: '35px!important',
            bottom: '7px',
            left: '15px'
        }
    })
);

const Football: FC = () => {
    const classes = useStyles();

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.PLAYER,
        item: { itemType: ItemTypes.FOOTBALL },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))

    return (
        <Avatar
            className={classes.player}
            ref={drag}
            src={football}
            style={{ opacity: isDragging ? 0.5 : 1}} />
    )
}

export default Football