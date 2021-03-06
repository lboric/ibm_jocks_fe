import { FC } from "react"
import React from "react";
import Square from "./square";
import { useDrop } from "react-dnd";
import { createStyles, makeStyles } from "@mui/styles";
import { checkIfIsForbiddenPosition } from "../../utils/playerPositionUtil";
import { ItemTypes, PlayerData } from "../../models/playerData";

const useStyles = makeStyles(() =>
    createStyles({
        boardSquare: {
            position: 'relative',
            width: '100%',
            height: '100%',
            backgroundColor: 'green',
            borderStyle: 'solid',
            borderColor: 'white',
        },
        droppable: {
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'lightgreen'
        },
        undroppable: {
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'red'
        }
    })
);

type Props = {
    x: number;
    y: number;
    hasPlayer: boolean;
    children: React.ReactNode;
    movePlayer: (x: number, y: number, index: number) => void;
}

const BoardSquare: FC<Props> = (props) => {
    const classes = useStyles();
    const { children, x, y, hasPlayer, movePlayer } = props;
    const [{ isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.PLAYER,
        canDrop: () => true,
        drop: (player) => movePlayer(x, y, (player as PlayerData).playerIndex),
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    }), [x, y])

    return (
        <div
            className={classes.boardSquare}
            ref={drop}
            style={{
                borderWidth: determineSquareCss(x, y),
                bottom: hasPlayer ? '0.51px' : '16.5px',
                padding: hasPlayer ? '20px' : '0px'
            }}
        >
            <Square>{children}</Square>
            {isOver && !hasPlayer && <div className={classes.droppable} />}
            {isOver && hasPlayer && <div className={classes.undroppable} />}
            {isOver && checkIfIsForbiddenPosition(x, y) && <div className={classes.undroppable} />}
        </div>
    )

    function determineSquareCss(x: number, y: number): string {
        if (x !== 0 && x % 4 === 0) {
            return "0px 0px 0px 2.5px";
        } else if (x !== 0 && x !== 6 && x % 3 === 0) {
            return '0px 2.5px 0px 0px';
        } else if (x === 0 && (y === 3 || y === 4)) {
            return '0px 2.5px 0px 0px'
        } else if (x === 0 && (y === 5)) {
            return '0px 2.5px 2.5px 0px'
        } else if (x === 0 && (y === 2)) {
            return '2.5px 2.5px 0px 0px'
        } else if (x === 7 && (y === 3 || y === 4)) {
            return '0px 0px 0px 2.5px'
        } else if (x === 7 && (y === 5)) {
            return '0px 0px 2.5px 2.5px'
        } else if (x === 7 && (y === 2)) {
            return '2.5px 0px 0px 2.5px'
        } else {
            return '0px 0px 0px 0px';
        }
    }
}

export default BoardSquare;