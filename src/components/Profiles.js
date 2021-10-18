import "./App.css";
import Grid from "@mui/material/Grid";
import SpacingGrid from "./SpacingGrid.js";
import Articles from "./Articles.js";
import { useContext } from "react";
import { AppContext } from "./AppContext.js";

const Contacts = () => {

const { contacts, articlesList } = useContext(AppContext);

    return (
        <>
        <div className="Contacts">
            <header className="Contacts-header">
            <h1>Your Contacts</h1>
            </header>
            <br></br>
            <Grid container justifyContent="center" spacing={2}>
            </Grid>
            <SpacingGrid personList={contacts} />
        </div>
        <div className="Articles">
                <header className="Articles-header">
                <h1>Your Articles</h1>
                </header>
                <br></br>
                <Grid container justifyContent="center" spacing={2}>
                </Grid>
                <Articles articlesList={articlesList} />
        </div>
        </>
    );
};
export default Contacts;
