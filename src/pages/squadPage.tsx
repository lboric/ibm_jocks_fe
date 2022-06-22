import React, { FC } from "react";
import Pitch from "../components/content/pitch";
import { PlayerPosition } from "../models/playerPositionData";
import { useAppDispatch } from "../redux/redux-hooks";
import { playerPositionsActions } from '../store/player-positions-actions';
import DarkLabel from "../components/content/labels/darkLabel";
import { FontVariant } from "../enums/fontVariant";
import { createStyles, makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { postSlackMessage } from "../actions/api";

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            marginBottom: "50px"
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
            <div className={classes.title}>
                <DarkLabel variant={FontVariant.H4}>
                    Squad
                </DarkLabel>
                <Button onClick={randomizePlayerPositions} variant="contained">Randomize</Button>
                <Button onClick={postSlackMessage} variant="contained">Send Slack Message</Button>
            </div>
            <Pitch playerPositions={playerPositions} movePlayer={handleMovePlayer} />
        </>
    );

    function handleMovePlayer(x: number, y: number, currentPlayerPosition: PlayerPosition) {
        dispatch(playerPositionsActions.setPlayerPosition({x: x, y: y, playerX: currentPlayerPosition.playerX, playerY: currentPlayerPosition.playerY}));
    }

    function randomizePlayerPositions() {
        dispatch(playerPositionsActions.randomizePlayerPositions());
    }
}

export default SquadPage;