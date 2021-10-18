import "./App.css";
import Grid from "@mui/material/Grid";
import SpacingGrid from "./SpacingGrid.js";
import { useContext } from "react";
import { AppContext } from "./AppContext.js";

function Home() {
    const { contacts, isContact, setIsContact, addContact, removeContact, profilesList, articlesList } = useContext(AppContext);

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
        <p>See what weirdos are online in your area:</p>
        <br></br>
        <Grid container justifyContent="center" spacing={2}>
            {/* <SwipeableTextMobileStepper pokemonCollection={personList} /> */}
        </Grid>
        <SpacingGrid personList={personList} />
        </div>
    );
}

export default Home;
