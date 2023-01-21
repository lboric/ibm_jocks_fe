import { PlayerPosition } from "../models/playerPositionData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    checkIfIsForbiddenPosition,
    checkIfPlayerIsAlreadyOnPosition,
    checkIfRightHalfOfTheFiledHasBeenFilled,
    checkIfLeftHalfOfTheFiledHasBeenFilled,
    findPlayerIndex,
    sortPlayerPositionsByX,
    generatePositionXOnTheRight,
    generatePositionXOnTheLeft,
    generateRandomXPitchPosition,
    generateRandomYPitchPosition
} from "../utils/playerPositionUtil";

type PlayerPositionsState = {
    playerPositions: PlayerPosition[]
};

type PlayerPositionActionPayload = {
    playerX: number;
    playerY: number;
    x: number;
    y: number;
}

const initialPlayerPositionsState: PlayerPositionsState = {
    playerPositions: [
        { playerX: 3, playerY: 0},
        { playerX: 4, playerY: 0},
        { playerX: 5, playerY: 0},
        { playerX: 6, playerY: 0},
        { playerX: 7, playerY: 0},
        { playerX: 8, playerY: 0},
        { playerX: 9, playerY: 0},
        { playerX: 10, playerY: 0},
        { playerX: 11, playerY: 0},
        { playerX: 12, playerY: 0}
    ]
};

const playerPositionsSlice = createSlice({
    name: 'playerPositions',
    initialState: initialPlayerPositionsState,
    reducers: {
        setPlayerPosition(state, action: PayloadAction<PlayerPositionActionPayload>) {
            const x = action.payload.x;
            const y = action.payload.y;
            const playerX = action.payload.playerX;
            const playerY = action.payload.playerY;
            const playerPositionsCopied = [...state.playerPositions];
            const checkHasPlayer = playerPositionsCopied.some((position) => position.playerX === x && position.playerY === y);

            if (!checkHasPlayer && !checkIfIsForbiddenPosition(x, y)) {
                const playerIndex = findPlayerIndex(playerX, playerY, state.playerPositions);

                playerPositionsCopied[playerIndex].playerX = action.payload.x;
                playerPositionsCopied[playerIndex].playerY = action.payload.y;
            }

            state.playerPositions = playerPositionsCopied;
        },
        randomizePlayerPositions(state) {
            state.playerPositions = [];
            const playerPositionsRandom = [];

            while (playerPositionsRandom.length <= 9) {
                const x: number =
                    checkIfLeftHalfOfTheFiledHasBeenFilled(playerPositionsRandom) ?
                        generatePositionXOnTheRight() :
                    checkIfRightHalfOfTheFiledHasBeenFilled(playerPositionsRandom) ?
                        generatePositionXOnTheLeft() :
                        generateRandomXPitchPosition();
                const y = generateRandomYPitchPosition();

                if (!checkIfIsForbiddenPosition(x, y) && !checkIfPlayerIsAlreadyOnPosition(x, y, playerPositionsRandom)) {
                    playerPositionsRandom.push({ playerX: x, playerY: y } as PlayerPosition);
                }
            }

            state.playerPositions = sortPlayerPositionsByX([...playerPositionsRandom]);
        }
    }
});

export default playerPositionsSlice;