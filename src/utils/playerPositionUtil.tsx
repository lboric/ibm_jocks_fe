import { PlayerPosition } from "../models/playerPositionData";

export function checkIfIsForbiddenPosition(x: number, y: number) {
    return (x === 0 && y === 2) ||
        (x === 0 && y === 1) ||
        (x === 0 && y === 5) ||
        (x === 0 && y === 6) ||
        (x === 7 && y === 2) ||
        (x === 7 && y === 5) ||
        (x === 7 && y === 6) ||
        (x === 7 && y === 1);
}

export function checkIfPlayerIsAlreadyOnPosition(x: number, y: number, playerPositions: PlayerPosition[]) {
    return playerPositions.some(position => position.playerX === x && position.playerY === y);
}

export function checkIfLeftHalfOfTheFiledHasBeenFilled(playerPositions: PlayerPosition[]) {
    const leftHalfX = [0, 1, 2, 3]

    return playerPositions.filter(position => leftHalfX.includes(position.playerX)).length === 5;
}

export function checkIfRightHalfOfTheFiledHasBeenFilled(playerPositions: PlayerPosition[]) {
    const leftHalfX = [4, 5, 6, 7]

    return playerPositions.filter(position => leftHalfX.includes(position.playerX)).length === 5;
}