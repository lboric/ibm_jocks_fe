import './App.css';
import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import { createStyles, makeStyles } from "@mui/styles";
import ScoresTable from "./components/content/table";
import TopNav from "./components/structure/topNav";
import SideNav from "./components/structure/sideNav";
import LightLabel from "./components/content/lightLabel";
import { fetchGoalScoringData } from "./actions/api";

const useStyles = makeStyles(() =>
    createStyles({
        fixed: {
            flexGrow: 0,
            flexShrink: 0,
            flexBasis: "240px"
        },
        mainContent: {
            flexGrow: 1,
            padding: 20
        }
    })
);

const theme = createTheme({
    palette: {
        primary: { main: blue[300] }
    }
});


function App() {
    // styles
    const classes = useStyles();

    // data
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
              <Grid item xs={10} container spacing={10} direction="column" className={classes.mainContent}>
                  <Grid item>
                      <LightLabel
                          variant="h4"
                      >
                          Leaderboard
                      </LightLabel>
                  </Grid>
                  <Grid item justify="center">
                      <ScoresTable goalScoringData={goalScoringData} />
                  </Grid>
              </Grid>
          </Grid>
        </ThemeProvider>
    );
}

export default App;
