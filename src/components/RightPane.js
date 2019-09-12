import React from 'react';
import Wallpaper from '../assets/loginWallpaper.png'
import { Grid, withStyles } from '@material-ui/core'

const styles = {
  wallpaper: {
    width: '100%',
    height: '100%',
  },
  wallpaperCtn: {
    width: '60%',
    minHeight: '100vh',
  },
}

const RightPane = ({ classes }) => {
  return (
    <Grid item className={classes.wallpaperCtn} >
      <img src={Wallpaper} className={classes.wallpaper} alt="generic wallpaper" />
    </Grid>
  )
}

export default withStyles(styles)(RightPane)