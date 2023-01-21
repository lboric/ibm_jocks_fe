import React, { FC } from "react";
import { PlayerPosition } from "../models/playerPositionData";
import { useAppDispatch } from "../redux/redux-hooks";
import { playerPositionsActions } from '../store/player-positions-actions';
import { Fonts } from "../enums/fonts";
import { createStyles, makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { postSlackMessage } from "../actions/api";
import Pitch from "../components/content/pitch";
import DarkLabel from "../components/content/labels/darkLabel";

const useStyles = makeStyles(() =>
    createStyles({
        topBar: {
            marginBottom: '2%'
        }
    })
);

type Props = {
    playerPositions: PlayerPosition[];
}

const SquadPage: FC<Props> = (props) => {
    const classes = useStyles();
    const { playerPositions } = props;
    const dispatch = useAppDispatch();
    
    return (
        <>
            <div className={classes.topBar}>
                <DarkLabel variant={Fonts.H4}>
                    Squad
                </DarkLabel>
                <Button onClick={handleRandomizePlayerPositions} variant="contained">Randomize</Button>
                <Button onClick={postSlackMessage} variant="contained">Send Slack Message</Button>
            </div>
            <Pitch playerPositions={playerPositions} movePlayer={handleMovePlayer} />
        </>
    );

    function handleMovePlayer(x: number, y: number, currentPlayerPosition: PlayerPosition): void {
        dispatch(playerPositionsActions.setPlayerPosition({x: x, y: y, playerX: currentPlayerPosition.playerX, playerY: currentPlayerPosition.playerY}));
    }

    function handleRandomizePlayerPositions(): void {
        dispatch(playerPositionsActions.randomizePlayerPositions());
    }
}

export default SquadPage;