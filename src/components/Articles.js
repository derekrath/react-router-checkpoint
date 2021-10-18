import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useContext } from "react";
import { AppContext } from "./AppContext.js";
import RecipeReviewCard from './RecipeReviewCard.js';


export default function Articles({articlesList}) {

    const [spacing, setSpacing] = React.useState(2);

    const jsx = `<Grid container spacing={${spacing}}>`;    

    return (
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={spacing}>
                {articlesList
            .map((article, value) => (
                <Grid key={value} item>
                    { `${ article.title }` + `${ article.article }` }
                </Grid>
                ))}
            </Grid>
            </Grid>
        </Grid>
    );
}
