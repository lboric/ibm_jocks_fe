import { PlayerPosition } from "../models/playerPositionData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PlayerPositionsState = {
    playerPositions: PlayerPosition[]
};

type UpdatePlayerPositionActionPayload = {
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
    ]
};

const playerPositionsSlice = createSlice({
    name: 'playerPositions',
    initialState: initialPlayerPositionsState,
    reducers: {
        setPlayerPositions(state, action: PayloadAction<UpdatePlayerPositionActionPayload>) {
            const x = action.payload.x;
            const y = action.payload.y;
            const playerPositionsCopied = [...state.playerPositions];
            const isForbiddenPosition =
                (x === 0 && y === 2) ||
                (x === 0 && y === 1) ||
                (x === 0 && y === 5) ||
                (x === 0 && y === 6) ||
                (x === 7 && y === 2) ||
                (x === 7 && y === 5) ||
                (x === 7 && y === 6) ||
                (x === 7 && y === 1);

            const checkHasPlayer = playerPositionsCopied.some((position) => position.playerX === x && position.playerY === y);

            if (!checkHasPlayer && !isForbiddenPosition) {
                playerPositionsCopied[action.payload.playerIndex].playerX = action.payload.x;
                playerPositionsCopied[action.payload.playerIndex].playerY = action.payload.y;
            }

            state.playerPositions = playerPositionsCopied;
        }
    }
});

export default playerPositionsSlice;