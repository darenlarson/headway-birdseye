import React from 'react';
import Form from './Form'
import Logo from '../assets/logo.png'
import { Box, Container, Grid, Typography, withStyles } from '@material-ui/core'

const styles = theme => ({
  infoPane: {
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    }
  },
  paneContent: {
    marginTop: 60,
    width: 400,
  },
  logo: {
    width: 100,
    marginBottom: 50
  },
  header: {
    marginBottom: 50,
  },
})

const LeftPane = ({ classes, history }) => {
  return (
    <Grid item className={classes.infoPane}>
      <Container className={classes.paneContent}>
        <Box component="img" src={Logo} alt="logo" className={classes.logo} />
        <Typography className={classes.header} variant="h4">Welcome to Birdseye!</Typography>
        <Form history={history} />
      </Container>
    </Grid>
  )
}

export default withStyles(styles)(LeftPane)