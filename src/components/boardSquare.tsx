import { FC } from "react"
import React from "react";
import Square from "./content/square";
import { useDrop } from "react-dnd";
import { ItemTypes, PlayerPosition } from "../pages/infoPage";

type Props = {
    x: number;
    y: number;
    hasPlayer?: boolean;
    children?: React.ReactNode;
    movePlayer: (position: PlayerPosition) => void;
}

const BoardSquare: FC<Props> = (props) => {
    const { children, x, y, movePlayer, hasPlayer } = props;
    const isBlack = (x + y) % 2 === 1;
    const isMiddleLeft = x !== 0 && x % 4 === 0;
    const isMiddleRight = x !== 0 && x !== 6 && x % 3 === 0;

    const [{ isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.PLAYER,
        drop: () => movePlayer({playerX: x, playerY: y} as PlayerPosition),
        collect: monitor => ({
            isOver: monitor.isOver(),
        }),
    }), [x, y])

    return (
        <div
            ref={drop}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                backgroundColor: 'green',
                borderStyle: 'solid',
                borderColor: 'white',
                borderWidth:
                    isMiddleLeft ? '0px 0px 0px 2.5px' :
                        isMiddleRight ? '0px 2.5px 0px 0px' : '0px 0px 0px 0px',
                bottom: hasPlayer ? '0.5px' : '16.5px',
                padding: hasPlayer ? '10px' : '0px'
            }}
        >
            <Square black={isBlack}>{children}</Square>
            {isOver && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        zIndex: 1,
                        opacity: 0.5,
                        backgroundColor: 'yellow',
                    }}
                />
            )}
        </div>
    )
}

export default BoardSquare;