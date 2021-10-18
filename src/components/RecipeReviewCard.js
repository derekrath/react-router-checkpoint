import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddBoxIcon from '@mui/icons-material/AddBox';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState, useContext } from "react";
import { AppContext } from "./AppContext.js";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard(profile) {

        const [expanded, setExpanded] = useState(false);

        const { contacts, isContact, setIsContact, addContact, removeContact } = useContext(AppContext);
    
    // let profile= pokeObj.pokemon;
    // let spritesUrl= profile.sprites.front_default;
    // let pokeName = profile.name;
    //     pokeName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
    // let pokeId = profile.id;
    // let pokeMoves = [];
    // for (let e=0; e < profile.moves.length; e++) {
    //     pokeMoves.push(profile.moves[e].move.name);
    // }
    // let pokeType = profile.types[0].type.name;
    // let pokeWeight = profile.weight;
    // let pokeHeight = profile.height;
    let profileObj = profile.profile;

    function handleChange(){
        if (contacts.some(e => e.id === profileObj.id)) {
            removeContact(profileObj);
        } else {
            addContact(profileObj);
        }
    }

    function handleExpandClick() {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
            action={
                <IconButton aria-label="settings">
                <MoreVertIcon />
                </IconButton>
            }
            title={`${profileObj.firstName}`}
        />
        <CardMedia
            component="img"
            height="194"
            image={profileObj.profileImage}
            alt="Profile Image"
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                {`Name:`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {`${profileObj.firstName} ${profileObj.lastName} `}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton
                onClick={() => handleChange()}
                aria-label="add to contacts">
                <AddBoxIcon style={{ color: ( isContact.includes(profileObj.id) ) ? "blue" : "lightgray" }} />          
            </IconButton>
            <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon />
            </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
            <Typography variant="body2" color="text.secondary">
                {`Birthday: ${profileObj.birthday} `}
            </Typography>
            <img src={ (profileObj.profileImage) } alt="profile picture" />
            </CardContent>
        </Collapse>
        </Card>
    );
}
