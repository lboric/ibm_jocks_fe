import React from "react";
import {
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    TableCell
} from "@mui/material";
import { GoalScoringData } from "../../models/goalScoringData";
import { isNotEmpty } from "../../utils/arrayUtils";

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
                        <TableCell><b>Name</b></TableCell>
                        <TableCell><b>Surname</b></TableCell>
                        <TableCell align="right"><b>Goals</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {goalScoringData.map((data) => (
                        <TableRow
                            key={data.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
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
