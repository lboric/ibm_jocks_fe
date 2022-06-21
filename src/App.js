import React, { useEffect, useState } from "react";
import { CssBaseline, Divider, Grid } from "@mui/material";
import { createStyles, makeStyles, ThemeProvider } from "@mui/styles";
import { Route, Routes } from "react-router-dom";
import './App.css';
import TablePage from "./pages/tablePage";
import PlayersPage from "./pages/playersPage";
import TopNav from "./components/structure/topNav";
import SideNav from "./components/structure/sideNav";
import { fetchGoalScoringData } from "./actions/api";
import { createTheme } from "@mui/material/styles";
import SquadPage from "./pages/squadPage";
import { useAppSelector } from "./redux/redux-hooks";

const theme = createTheme({
    components: {
        MuiTypography: {
            defaultProps: {
                fontFamily: 'cursive',
            }
        },
        MuiCard: {
            defaultProps: {
                backgroundColor: 'blue'
            }
        }
    }
});

const useStyles = makeStyles(() =>
    createStyles({
        fixed: {
            flexGrow: 0,
            flexShrink: 0,
            flexBasis: "240px"
        },
        mainContent: {
            padding: 60,
            flexGrow: 1,
            backgroundColor: 'lightblue'
        },
        divider: {
            marginTop: "50px",
            marginBottom: "50px"
        },
        innerGrid: {
            textAlign: "-webkit-center"
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
                <Grid item xs={2} className={classes.fixed}>
                    <SideNav />
                </Grid>
                <Grid item xs={10} spacing={10} direction="column" alignItems="center"
                      justifyContent="center" className={classes.mainContent} >
                    <Grid item className={classes.innerGrid}>
                        <div className={classes.divider}><Divider /></div>
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
