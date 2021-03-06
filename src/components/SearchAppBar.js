import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from '@mui/icons-material/Person';
import SvgIcon from "@mui/material/SvgIcon";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import Stack from "@mui/material/Stack";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
        width: "20ch",
        },
    },
    },
}));

export default function SearchAppBar({ title }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Stack direction="row" spacing={2}>
            <Link to={`/home`}>
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<HomeIcon style={{ color: "white" }} />}
              >
                Home
              </Button>
            </Link>
            <Link to={`/profiles`}>
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<PersonIcon style={{ color: "white" }} />}
              >
                Profiles
              </Button>
            </Link>
            <Link to={`/about`}>
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<InfoIcon style={{ color: "white" }} />}
              >
                About
              </Button>
            </Link>
          </Stack>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {title}
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search???"
              inputProps={{ "aria-label": "search" }}
            />
            {/* <input type="text" placeholder="Enter a Name" name="inputName" /> */}
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
