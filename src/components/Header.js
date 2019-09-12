import React from "react";
import Logo from '../assets/logo_purple.png'
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import { AppBar, InputBase, Toolbar, Typography, withWidth, withStyles } from "@material-ui/core";

const styles = theme => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  leftContainer: {
    display: 'flex',
    width: '70%',
    maxWidth: '500px',
    marginRight: 10,
  },
  image: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      width: 50,
      marginRight: 25
    }
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 5px',
    width: '100%',
    backgroundColor: '#7857FF',
  },
  input: {
    color: 'inherit',
  },
  rightContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 200,
  },
  daysLeft: {
    color: theme.palette.primary.light,
    fontStyle: 'italic',
  },
  upgrade: {
    textDecoration: 'underline',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.light,
    }
  },
  settings: {
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.light,
    }
  }
})

const Header = ({ classes }) => {

  return (
    <AppBar position="sticky" >

      <Toolbar className={classes.toolbar} >

        <div className={classes.leftContainer} >
          <img src={Logo} alt="logo" className={classes.image} />
          <div className={classes.inputContainer} >
            <SearchIcon  />
            <InputBase className={classes.input} />
          </div>
        </div>

        <div className={classes.rightContainer}>
          <Typography variant='body2' className={classes.daysLeft} >10 days left</Typography>
          <Typography variant='body2' className={classes.upgrade}>Upgrade</Typography>
          <SettingsIcon className={classes.settings} />
        </div>

      </Toolbar>

    </AppBar>
  );
}

export default withWidth()(withStyles(styles)(Header))