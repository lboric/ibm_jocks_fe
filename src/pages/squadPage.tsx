import React, { FC } from "react";
import { PlayerPosition } from "../models/playerPositionData";
import { useAppDispatch } from "../redux/redux-hooks";
import { positionsActions } from '../store/positions-actions';
import { Fonts } from "../enums/fonts";
import { createStyles, makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { postSlackMessage } from "../actions/api";
import { FootballPosition } from "../models/footballPositionData";
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
    footballPosition: FootballPosition;
    playerPositions: PlayerPosition[];
}

const SquadPage: FC<Props> = (props) => {
    const classes = useStyles();
    const { playerPositions, footballPosition } = props;
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
            <Pitch playerPositions={playerPositions} footballPosition={footballPosition} movePlayer={handleMovePlayer} moveFootball={handleMoveFootball} />
        </>
    );

    function handleMoveFootball(x: number, y: number): void {
        dispatch(positionsActions.setFootballPosition({x: x, y: y}));
    }

    function handleMovePlayer(x: number, y: number, currentPlayerPosition: PlayerPosition): void {
        dispatch(positionsActions.setPlayerPosition({x: x, y: y, playerX: currentPlayerPosition.playerX, playerY: currentPlayerPosition.playerY}));
    }

    function handleRandomizePlayerPositions(): void {
        dispatch(positionsActions.randomizePlayerPositions());
    }
}

export default SquadPage;