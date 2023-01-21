import React, { FC } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { PlayerPosition } from "../../models/playerPositionData";
import { findPlayerIndex } from "../../utils/playerPositionUtil";
import { createStyles, makeStyles } from "@mui/styles";
import { PitchDimensions } from "../../enums/dimensions";
import Player from "./player";
import BoardSquare from './boardSquare';

const useStyles = makeStyles(() =>
    createStyles({
        squareWrapper: {
            width: '6.25%',
            height: '9.09%'
        },
        pitch: {
            borderStyle: 'solid',
            borderColor: 'white',
            borderWidth: '7px',
            width: '90%',
            height: '780px',
            display: 'flex',
            flexWrap: 'wrap',
        }
    })
);

type Props = {
    playerPositions: PlayerPosition[];
    movePlayer: (x: number, y: number, currentPlayerPosition: PlayerPosition) => void;
}

const Pitch: FC<Props> = (props) => {
    const classes = useStyles();
    const { playerPositions, movePlayer } = props;
    const squares = []

    for (let i = 0; i < PitchDimensions.HEIGHT; i++) {
        for (let j = 0; j < PitchDimensions.WIDTH; j++) {
            const hasPlayer = checkIfSquareHasPlayerOnIt(j, i, playerPositions);

            squares.push(renderSquare(j, i, hasPlayer));
        }
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={classes.pitch}>
                {squares}
            </div>
        </DndProvider>
    )

    function renderSquare(x: number, y: number, hasPlayer: boolean): React.ReactNode {
        const renderPiece = (x: number, y: number, hasPlayer: boolean) => {
            if (hasPlayer) {
                const playerIndex = findPlayerIndex(x, y, playerPositions);

                return <Player playerPosition={{playerX: x, playerY: y} as PlayerPosition} playerIndex={playerIndex} />
            } else {
                return <p style={{display: 'hidden'}} />
            }
        };

        return (
            <div className={classes.squareWrapper}>
                <BoardSquare x={x} y={y} hasPlayer={hasPlayer} movePlayer={movePlayer}>
                    {renderPiece(x, y, hasPlayer)}
                </BoardSquare>
            </div>
        )
    }

    function checkIfSquareHasPlayerOnIt(x: number, y: number, playerPositions: PlayerPosition[]): boolean {
        return (playerPositions ?? []).some(position => position.playerX === x && position.playerY === y);
    }
}

export default Pitch;