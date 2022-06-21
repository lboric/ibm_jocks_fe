import React, { FC } from "react";
import Pitch from "../components/content/pitch";
import { PlayerPosition } from "../models/playerPositionData";
import { useAppDispatch } from "../redux/redux-hooks";
import { playerPositionsActions } from '../store/player-positions-actions';
import DarkLabel from "../components/content/labels/darkLabel";
import { FontVariant } from "../enums/fontVariant";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            marginBottom: "50px"
        }
    })
);

export const ItemTypes = {
    PLAYER: 'player'
}

type Props = {
    playerPositions: PlayerPosition[];
}

const SquadPage: FC<Props> = (props) => {
    const classes = useStyles();
    const { playerPositions } = props;
    const dispatch = useAppDispatch();

    function handleMovePlayer(x: number, y: number, index: number) {
        dispatch(playerPositionsActions.setPlayerPositions({playerIndex: index, x: x, y: y}));
    }

    return (
        <>
            <div className={classes.title}>
                <DarkLabel variant={FontVariant.H4}>
                    Squad
                </DarkLabel>
            </div>
            <Pitch playerPositions={playerPositions} movePlayer={handleMovePlayer} />
        </>
    );
}

export default SquadPage;