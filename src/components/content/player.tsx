import React, { FC } from 'react'
import { useDrag } from "react-dnd";
import { Avatar } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { ItemTypes } from "../../enums/playerData";
import { PlayerPosition } from "../../models/playerPositionData";

const useStyles = makeStyles(() =>
    createStyles({
        player: {
            fontWeight: 'bold',
            cursor: 'move',
            width: '50px!important',
            height: '50px!important',
            bottom: '7px',
            left: '15px'
        }
    })
);

export type Props = {
    playerIndex: number;
    playerPosition: PlayerPosition;
}

const Player: FC<Props> = (props) => {
    const classes = useStyles();
    const { playerIndex, playerPosition } = props;
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.PLAYER,
        item: playerPosition,
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))

    return (
        <Avatar
            className={classes.player}
            ref={drag}
            style={ playerIndex <= 4 ? { backgroundColor: 'black', opacity: isDragging ? 0.5 : 1 } : { opacity: isDragging ? 0.5 : 1}}>
            {playerIndex}
        </Avatar>
    )
}

export default Player