import React from "react";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import { GoalScoringData } from "../../models/goalScoringData";
import { isNotEmpty } from "../../utils/arrayUtils";
import DarkLabel from "./labels/darkLabel";
import { FontVariant } from "../../enums/fontVariant";

type Props = {
    goalScoringData: GoalScoringData[]
}

const ScoresTable: React.FC<Props> = (props: Props) => {
    const { goalScoringData } = props;

    if (isNotEmpty(goalScoringData)) {
        return <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><DarkLabel variant={FontVariant.H6}>Rank</DarkLabel></TableCell>
                        <TableCell><DarkLabel variant={FontVariant.H6}>Name</DarkLabel></TableCell>
                        <TableCell><DarkLabel variant={FontVariant.H6}>Surname</DarkLabel></TableCell>
                        <TableCell><DarkLabel variant={FontVariant.H6} alignRight={true}>Goals</DarkLabel></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {goalScoringData.map((data, index) => (
                        <TableRow
                            key={data.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {index + 1}.
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {data.name}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {data.surname}
                            </TableCell>
                            <TableCell align="right">{data.goals}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    } else {
        return <></>
    }
}

export default ScoresTable;
