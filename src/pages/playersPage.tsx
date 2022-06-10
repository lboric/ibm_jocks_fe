import React, { FC } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import PlayerPortrait from "../components/content/playerPortrait";
import { GoalScoringData } from "../models/goalScoringData";
import { Grid } from "@mui/material";
import { FontVariant } from "../enums/fontVariant";
import DarkLabel from "../components/content/darkLabel";

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            marginBottom: "50px"
        },
        page: {
            padding: "30px",
        }
    })
);

type Props = {
    goalScoringData: GoalScoringData[];
}

const PlayersPage: FC<Props> = (props) => {
    const classes = useStyles();
    const { goalScoringData } = props;

    return (
        <>
            <div className={classes.title}>
                <DarkLabel variant={FontVariant.H4}>
                    Players
                </DarkLabel>
            </div>
            <Grid xs={12} container spacing={8} direction="row" className={classes.page}>
                {goalScoringData.map((data) =>
                    <Grid item>
                        <PlayerPortrait name={data.name} surname={data.surname} />
                    </Grid>
                )}
            </Grid>
        </>
    );
}


export default PlayersPage;