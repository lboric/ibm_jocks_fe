import React, { useEffect, useState } from "react";
import { CssBaseline, Divider, Grid } from "@mui/material";
import { createStyles, makeStyles, ThemeProvider } from "@mui/styles";
import { Route, Routes } from "react-router-dom";
import { fetchGoalScoringData } from "./actions/api";
import { createTheme } from "@mui/material/styles";
import { useAppSelector } from "./redux/redux-hooks";
import './App.css';
import TablePage from "./pages/tablePage";
import PlayersPage from "./pages/playersPage";
import TopNav from "./components/structure/topNav";
import SideNav from "./components/structure/sideNav";
import SquadPage from "./pages/squadPage";

// Thematic styling throughout the whole app
const theme = createTheme({
    components: {
        MuiTypography: {
            defaultProps: {
                fontFamily: 'arial',
            }
        }
    }
});

// File specific styling
const useStyles = makeStyles(() =>
    createStyles({
        mainContent: {
            padding: '3%',
            backgroundColor: 'lightblue',
            textAlign: "-webkit-center"
        },
        divider: {
            marginTop: '3%',
            marginBottom: '3%'
        }
    })
);

function App() {
    const classes = useStyles();
    const playerPositions = useAppSelector(state => state.playerPositions).playerPositions;
    const [goalScoringData, setGoalScoringData] = useState([]);

    // api call
    useEffect(() => {
        setGoalScoringData(fetchGoalScoringData());
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Grid container>
                <Grid item xs={12}>
                    <TopNav />
                </Grid>
                <Grid item xs={2}>
                    <SideNav />
                </Grid>
                <Grid item xs={10} spacing={10} direction="column" className={classes.mainContent} >
                    <Grid item>
                        <div className={classes.divider}>
                            <Divider />
                        </div>
                        <Routes>
                            <Route path="/" element={<TablePage goalScoringData={goalScoringData} />} />
                            <Route path="/players" element={<PlayersPage goalScoringData={goalScoringData} />} />
                            <Route path="/squads" element={<SquadPage  playerPositions={playerPositions} />} />
                        </Routes>
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default App;
