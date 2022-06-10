import React from 'react'
import { useDrag } from "react-dnd";
import { Avatar } from "@mui/material";
import { ItemTypes } from "../../pages/infoPage";

const Player = () => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.PLAYER,
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))

    return (
        <Avatar variant="rounded"
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                fontWeight: 'bold',
                cursor: 'move',
                width: '60px',
                height: '55px'
            }}
        >
            s
        </Avatar>
    )
}

export default Player