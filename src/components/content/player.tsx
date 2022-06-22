import React, {FC} from 'react'
import { useDrag } from "react-dnd";
import { Avatar } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { ItemTypes } from "../../models/playerData";

const useStyles = makeStyles(() =>
    createStyles({
        player: {
            fontWeight: 'bold',
            cursor: 'move',
            width: '60px',
            height: '55px',
            left: '48.5px'
        }
    })
);

export type Props = {
    playerIndex: number;
}

const Player: FC<Props> = (props) => {
    const classes = useStyles();
    const { playerIndex } = props;

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.PLAYER,
        item: { playerIndex },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))

    return (
        <Avatar variant="rounded"
            className={classes.player}
            ref={drag}
            style={{ opacity: isDragging ? 0.5 : 1}}>
            S
        </Avatar>
    )
}

export default Player