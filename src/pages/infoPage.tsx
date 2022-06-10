import React, { useState } from "react";
import Board from "../components/content/pitch";

export const ItemTypes = {
    PLAYER: 'player'
}

export type PlayerPosition = {
    playerX: number;
    playerY: number;
}

const InfoPage = () => {
    const [playerPosition, setPlayerPosition] = useState({ playerX: 0, playerY: 0} as PlayerPosition);

    return <Board playerPosition={playerPosition} movePlayer={setPlayerPosition} />;
}

export default InfoPage;