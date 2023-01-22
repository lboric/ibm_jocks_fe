import React, {FC} from 'react'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {PlayerPosition} from "../../models/playerPositionData";
import {checkIfFootballIsAlreadyOnPosition, checkIfPlayerIsAlreadyOnPosition, findPlayerIndex} from "../../utils/playerPositionUtil";
import {createStyles, makeStyles} from "@mui/styles";
import {PitchDimensions} from "../../enums/dimensions";
import Player from "./player";
import BoardSquare from './boardSquare';
import {FootballPosition} from "../../models/footballPositionData";
import {ItemTypes} from "../../enums/itemTypes";
import Football from "./football";

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
    footballPosition: FootballPosition;
    playerPositions: PlayerPosition[];
    moveFootball: (x: number, y: number) => void;
    movePlayer: (x: number, y: number, currentPlayerPosition: PlayerPosition) => void;
}

const Pitch: FC<Props> = (props) => {
    const classes = useStyles();
    const { playerPositions, footballPosition, movePlayer, moveFootball } = props;
    const squares = []

    for (let i = 0; i < PitchDimensions.HEIGHT; i++) {
        for (let j = 0; j < PitchDimensions.WIDTH; j++) {
            const hasPlayer = checkIfPlayerIsAlreadyOnPosition(j, i, playerPositions);
            const hasFootball = !hasPlayer && checkIfFootballIsAlreadyOnPosition(j, i, footballPosition);

            if (hasFootball) {
                squares.push(renderSquare(j, i, true, ItemTypes.FOOTBALL));
            } else if (hasPlayer) {
                squares.push(renderSquare(j, i, true, ItemTypes.PLAYER));
            } else {
                squares.push(renderSquare(j, i, false));
            }
        }
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={classes.pitch}>
                {squares}
            </div>
        </DndProvider>
    )

    function renderSquare(x: number, y: number, hasItem: boolean, itemType?: ItemTypes): React.ReactNode {
        const renderPiece = (x: number, y: number, hasItem: boolean) => {
            if (hasItem) {
                if (itemType === ItemTypes.PLAYER) {
                    const playerIndex = findPlayerIndex(x, y, playerPositions);

                    return <Player playerPosition={{playerX: x, playerY: y} as PlayerPosition} playerIndex={playerIndex} />
                } else if (itemType === ItemTypes.FOOTBALL) {
                    return  <Football />
                }
            } else {
                return <p style={{display: 'hidden'}} />
            }
        };

        return (
            <div className={classes.squareWrapper}>
                <BoardSquare x={x} y={y} hasItem={hasItem} movePlayer={movePlayer} moveFootball={moveFootball}>
                    {renderPiece(x, y, hasItem)}
                </BoardSquare>
            </div>
        )
    }

}

export default Pitch;