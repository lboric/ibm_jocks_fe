import { PlayerPosition } from "../models/playerPositionData";

export function checkIfIsForbiddenPosition(x: number, y: number): boolean {
    return (x === 0 && y === 2) ||
        (x === 0 && y === 1) ||
        (x === 0 && y === 5) ||
        (x === 0 && y === 6) ||
        (x === 7 && y === 2) ||
        (x === 7 && y === 5) ||
        (x === 7 && y === 6) ||
        (x === 7 && y === 1);
}

export function checkIfPlayerIsAlreadyOnPosition(x: number, y: number, playerPositions: PlayerPosition[]): boolean {
    return playerPositions.some(position => position.playerX === x && position.playerY === y);
}

export function checkIfLeftHalfOfTheFiledHasBeenFilled(playerPositions: PlayerPosition[]): boolean {
    const leftHalfX = [0, 1, 2, 3]

    return playerPositions.filter(position => leftHalfX.includes(position.playerX)).length === 5;
}

export function checkIfRightHalfOfTheFiledHasBeenFilled(playerPositions: PlayerPosition[]): boolean {
    const leftHalfX = [4, 5, 6, 7]

    return playerPositions.filter(position => leftHalfX.includes(position.playerX)).length === 5;
}

export function sortPlayerPositionsByX(playerPositions: PlayerPosition[]): PlayerPosition[] {
    return [...playerPositions].sort((position1, position2) => position1.playerX - position2.playerX);
}

export function findPlayerIndex(x: number, y: number, playerPositions: PlayerPosition[]): number {
    return (playerPositions ?? []).findIndex(position => position.playerX === x && position.playerY === y);
}