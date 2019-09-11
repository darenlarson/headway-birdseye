import React from 'react';
import '../scss/LoginView.scss';
import LeftPane from '../components/LeftPane'
import RightPane from '../components/RightPane'
import { Grid, withWidth } from '@material-ui/core'

const LoginView = (({ history, width }) => {
  return (
    <Grid container justify='center'>
      <LeftPane history={history} />
      {width !== 'sm' && width !== 'xs'
        ? <RightPane />
        : undefined
      }
    </Grid>
  )
})

export default withWidth()(LoginView)