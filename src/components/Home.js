import "./App.css";
import Grid from "@mui/material/Grid";
// import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";
import SpacingGrid from "./SpacingGrid.js";
// import { ContactlessOutlined } from "@mui/icons-material";
import { useContext } from "react";
import { AppContext } from "./AppContext.js";
import { Profiler } from "react/cjs/react.production.min";

function Home() {
    const { contacts, profilesList, articlesList } = useContext(AppContext);

    let personList = [
        {
        label: "",
        imgPath: "",
        },
    ];
    if (profilesList !== null) {
        personList =profilesList;
    }
    
    return (
        <div className="Home">
        <header className="Home-header">
            <h1>Your Profile Page</h1>
        </header>
        <p>Browse articles and profiles:</p>
        <br></br>
        <Grid container justifyContent="center" spacing={2}>
            {/* <SwipeableTextMobileStepper pokemonCollection={personList} /> */}
        </Grid>
        <SpacingGrid personList={personList} />
        </div>
    );
}

export default Home;
