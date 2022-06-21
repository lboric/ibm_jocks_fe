import React, { FC } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Player from "./player";
import BoardSquare from '../structure/boardSquare';
import { PlayerPosition } from "../../models/playerPositionData";

type Props = {
    playerPositions: PlayerPosition[];
    movePlayer: (x: number, y: number, index: number) => void;
}

const Pitch: FC<Props> = (props) => {
    const { playerPositions, movePlayer } = props;
    const squares = []

    for (let i = 0; i < 64; i++) {
        const x = i % 8;
        const y = Math.floor(i / 8);
        const hasPlayer = checkIfSquareHasPlayerOnIt(x, y, playerPositions);

        squares.push(renderSquare(x, y, hasPlayer));
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div
                style={{
                    borderStyle: 'solid',
                    borderColor: 'white',
                    borderWidth: '5px',
                    width: '90%',
                    height: '680px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    backgroundImage: './../static/pitch.png',
                    left: '10000px'
                }}
            >
                {squares}
            </div>
        </DndProvider>
    )

    function renderSquare(x: number, y: number, hasPlayer: boolean) {
        const renderPiece = (x: number, y: number, hasPlayer: boolean) => {
            if (hasPlayer) {
                const playerIndex = findPlayerIndex(x, y, playerPositions);

                return <Player playerIndex={playerIndex} />
            } else {
                return <p style={{display: 'hidden'}} />
            }
        };

        return (
            <div style={{ width: '12.5%', height: '12.5%'}}>
                <BoardSquare x={x} y={y} hasPlayer={hasPlayer} movePlayer={movePlayer}>
                    {renderPiece(x, y, hasPlayer)}
                </BoardSquare>
            </div>
        )
    }

    function checkIfSquareHasPlayerOnIt(x: number, y: number, playerPositions: PlayerPosition[]): boolean {
        return (playerPositions ?? []).some(position => position.playerX === x && position.playerY === y);
    }

    function findPlayerIndex(x: number, y: number, playerPositions: PlayerPosition[]): number {
        return (playerPositions ?? []).findIndex(position => position.playerX === x && position.playerY === y);
    }
}

export default Pitch;