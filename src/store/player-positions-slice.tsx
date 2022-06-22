import { PlayerPosition } from "../models/playerPositionData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    checkIfIsForbiddenPosition,
    checkIfPlayerIsAlreadyOnPosition,
    checkIfRightHalfOfTheFiledHasBeenFilled,
    checkIfLeftHalfOfTheFiledHasBeenFilled
} from "../utils/playerPositionUtil";

type PlayerPositionsState = {
    playerPositions: PlayerPosition[]
};

type PlayerPositionActionPayload = {
    playerIndex: number;
    x: number;
    y: number;
}

const initialPlayerPositionsState: PlayerPositionsState = {
    playerPositions: [
        { playerX: 0, playerY: 0},
        { playerX: 1, playerY: 0},
        { playerX: 2, playerY: 0},
        { playerX: 3, playerY: 0},
        { playerX: 4, playerY: 0},
        { playerX: 5, playerY: 0},
        { playerX: 6, playerY: 0},
        { playerX: 7, playerY: 0},
        { playerX: 0, playerY: 1},
        { playerX: 7, playerY: 1}
    ]
};

const playerPositionsSlice = createSlice({
    name: 'playerPositions',
    initialState: initialPlayerPositionsState,
    reducers: {
        setPlayerPosition(state, action: PayloadAction<PlayerPositionActionPayload>) {
            const x = action.payload.x;
            const y = action.payload.y;
            const playerPositionsCopied = [...state.playerPositions];


            const checkHasPlayer = playerPositionsCopied.some((position) => position.playerX === x && position.playerY === y);

            if (!checkHasPlayer && !checkIfIsForbiddenPosition(x, y)) {
                playerPositionsCopied[action.payload.playerIndex].playerX = action.payload.x;
                playerPositionsCopied[action.payload.playerIndex].playerY = action.payload.y;
            }

            state.playerPositions = playerPositionsCopied;
        },
        randomizePlayerPositions(state) {
            const playerPositionsRandom = [];

            while (playerPositionsRandom.length <= 9) {
                const x: number = checkIfLeftHalfOfTheFiledHasBeenFilled(playerPositionsRandom) ?
                        Math.floor(Math.random() * (7 - 5) ) + 5 :
                            checkIfRightHalfOfTheFiledHasBeenFilled(playerPositionsRandom) ?
                                Math.floor(Math.random() * (4)) :
                                    Math.floor(Math.random() * 8);
                const y = Math.floor(Math.random() * 8);

                if (!checkIfIsForbiddenPosition(x, y) && !checkIfPlayerIsAlreadyOnPosition(x, y, playerPositionsRandom)) {
                    playerPositionsRandom.push({ playerX: x, playerY: y } as PlayerPosition);
                }
            }

            state.playerPositions = playerPositionsRandom;
        }
    }
});

export default playerPositionsSlice;