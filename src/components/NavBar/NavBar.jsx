import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import MMenuItem from "@material-ui/core/MenuItem";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    position: "sticky",
    top: 0,
    zIndex: 2,
  },

  title: {
    display: "none",
    fontFamily: "Syncopate-Bold",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontSize: "1.3em",
    padding: "0 4.5em",
  },
  subtitle: {
    fontSize: "1.3em",
    fontFamily: "Syncopate-Bold",
    transition: "font-size 1s ease",
    marginTop: "0.5em",
  },
  inputRoot: {
    color: "inherit",
  },

  sectionDesktop: {
    display: "none",

    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    padding: "0 1em",
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    padding: "0 1em",
  },
}));

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  &:a {
    font-family: Syncopate-Bold;
    transition: font-size 1s ease;
    &:hover {
      font-size: 1.2rem;
    }
  }
`;

const MenuItem = ({ ariaLabel, classes, children }) => (
  <MMenuItem>
    <IconButton aria-label={ariaLabel} color="inherit">
      <Typography className={classes}>{children}</Typography>
    </IconButton>
  </MMenuItem>
);

const NavBar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        style={{
          minWidth: "100vw",
          backgroundColor: "rgba(0,0,1, 0.2)",
        }}
      >
        <Toolbar>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <StyledNavLink exact to="/about">
              <MenuItem aria-label="aboutButton" classes={classes.subtitle}>
                ABOUT
              </MenuItem>
            </StyledNavLink>
            <StyledNavLink exact to="/portfolio">
              <MenuItem aria-label="workButton" classes={classes.subtitle}>
                PORTFOLIO
              </MenuItem>
            </StyledNavLink>
          </div>
          <div className={classes.sectionMobile}>
            <StyledNavLink exact to="/about">
              <MenuItem aria-label="aboutButton" classes={classes.subtitle}>
                ABOUT
              </MenuItem>
            </StyledNavLink>
            <StyledNavLink exact to="/portfolio">
              <MenuItem aria-label="workButton" classes={classes.subtitle}>
                PORTFOLIO
              </MenuItem>
            </StyledNavLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
