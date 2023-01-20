import React, { FC } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { PlayerPosition } from "../../models/playerPositionData";
import { findPlayerIndex } from "../../utils/playerPositionUtil";
import Player from "./player";
import BoardSquare from './boardSquare';

type Props = {
    playerPositions: PlayerPosition[];
    movePlayer: (x: number, y: number, currentPlayerPosition: PlayerPosition) => void;
}

const Pitch: FC<Props> = (props) => {
    const { playerPositions, movePlayer } = props;
    const squares = []

    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 16; j++) {
            const hasPlayer = checkIfSquareHasPlayerOnIt(j, i, playerPositions);

            squares.push(renderSquare(j, i, hasPlayer));
        }
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div
                style={{
                    borderStyle: 'solid',
                    borderColor: 'white',
                    borderWidth: '5px',
                    width: '90%',
                    height: '780px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    left: '10000px'
                }}
            >
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
            <div style={{ width: '6.25%', height: '9.09%'}}>
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