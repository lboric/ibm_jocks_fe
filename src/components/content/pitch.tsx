import React, { FC } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Player from "./player";
import BoardSquare from '../boardSquare';
import { PlayerPosition } from "../../pages/infoPage";
import image from "./pitch.png"



type Props = {
    playerPosition: PlayerPosition;
    movePlayer: (position: PlayerPosition) => void;
}

const Board: FC<Props> = (props) => {
    const { playerPosition, movePlayer } = props;
    const squares = []

    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, playerPosition));
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div
                style={{
                    borderStyle: 'solid',
                    borderColor: 'white',
                    borderWidth: '5px',
                    width: '1000px',
                    height: '600px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    backgroundImage: './../static/pitch.png'
                }}
            >
                {squares}
            </div>
        </DndProvider>
    )

    function renderSquare(i: number, playerPosition: PlayerPosition) {
        const x = i % 8;
        const y = Math.floor(i / 8);
        const playerX = (playerPosition ?? {playerX: -1, playerY: -1} as PlayerPosition).playerX;
        const playerY = (playerPosition ?? {playerX: -1, playerY: -1} as PlayerPosition).playerY;
        const hasPlayer = x === playerX && y === playerY;

        const renderPiece = (x: number, y: number, playerX?: number, playerY?: number) => {
            if (x === playerX && y === playerY) {
                return <Player />
            } else {
                //TODO fix this
                return <p>.</p>
            }
        }

        return (
            <div key={i} style={{ width: '12.5%', height: '12.5%'}}>
                <BoardSquare x={x} y={y} hasPlayer={hasPlayer} movePlayer={movePlayer}>
                    {renderPiece(x, y, playerX, playerY)}
                </BoardSquare>
            </div>
        )
    }
}

export default Board;