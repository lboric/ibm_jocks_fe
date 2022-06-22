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
import { sortPlayerPositionsByX } from "../utils/playerPositionUtil";

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
    const playerPositionsSorted = sortPlayerPositionsByX(playerPositions);
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
            <Pitch playerPositions={playerPositionsSorted} movePlayer={handleMovePlayer} />
        </>
    );

    function handleMovePlayer(x: number, y: number, index: number) {
        dispatch(playerPositionsActions.setPlayerPosition({playerIndex: index, x: x, y: y}));
    }

    function randomizePlayerPositions() {
        dispatch(playerPositionsActions.randomizePlayerPositions());
    }
}

export default SquadPage;