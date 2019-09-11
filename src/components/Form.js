import React, { Component } from "react";
import { Button, TextField, withStyles, Typography } from "@material-ui/core";

const styles = {
  button: {
    margin: "10px 0",
  },
  textInput: {
    margin: "0px 0px 20px 0px",
  }
}

class Form extends Component {
  state = {
    email: "",
    password: ""
  }

  handleChange = name => ({ target: { value } }) =>
    this.setState({ [name]: value })

  handleSubmit = e => {
    e.preventDefault()
    this.props.history.push("/task-manager");
  }

  render() {
    const { email, password } = this.state,
    { classes } = this.props

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <Typography variant="body1">Email Address</Typography>
          <TextField
            className={classes.textInput}
            fullWidth
            hiddenLabel={true}
            margin="dense"
            onChange={this.handleChange("email")}
            type="email"
            value={email}
            variant="outlined"
            required
          />

          <Typography variant="body1">Password</Typography>
          <TextField
            className={classes.textInput}
            fullWidth
            margin="dense"
            onChange={this.handleChange("password")}
            type="password"
            value={password}
            variant="outlined"
            required
          />

          <Button
            className={classes.button}
            fullWidth
            style={{ backgroundColor: "black", color: "white" }}
            type="submit"
            variant="contained"
          >
            SIGN IN
          </Button>
        </form>

        <Button
          className={classes.button}
          fullWidth
          style={{ border: "1px solid black" }}
          variant="outlined"
        >
          CREATE AN ACCOUNT
        </Button>

        <Button
          fullWidth
          style={{ color: 'grey' }}
        >
          FORGOT PASSWORD
        </Button>
      </>
    );
  }
}

export default withStyles(styles)(Form)