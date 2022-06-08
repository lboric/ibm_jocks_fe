import React, {FC} from "react";
import {GoalScoringData} from "../models/goalScoringData";
import {createStyles, makeStyles} from "@mui/styles";
import {FontVariant} from "../enums/fontVariant";
import ScoresTable from "../components/content/table";
import DarkLabel from "../components/content/darkLabel";

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            marginBottom: "50px"
        }
    })
);

type Props = {
    goalScoringData: GoalScoringData[];
}

const TablePage: FC<Props> = (props) => {
    const classes = useStyles();
    const { goalScoringData } = props;

    return (
        <>
            <div className={classes.title}>
                <DarkLabel variant={FontVariant.H4}>
                    Leaderboard
                </DarkLabel>
            </div>
            <ScoresTable goalScoringData={goalScoringData} />
        </>
    );
}

export default TablePage;