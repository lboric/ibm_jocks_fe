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
            width: '60px!important',
            height: '60px!important',
            bottom: '7px',
            left: '15px'
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
        <Avatar
            className={classes.player}
            ref={drag}
            style={{ opacity: isDragging ? 0.5 : 1}}>
            S
        </Avatar>
    )
}

export default Player