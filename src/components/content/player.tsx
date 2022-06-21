import React, {FC} from 'react'
import { useDrag } from "react-dnd";
import { Avatar } from "@mui/material";
import { ItemTypes } from "../../pages/squadPage";
import { createStyles, makeStyles } from "@mui/styles";

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

export type PlayerProps = {
    playerIndex: number;
}

const Player: FC<PlayerProps> = (props) => {
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