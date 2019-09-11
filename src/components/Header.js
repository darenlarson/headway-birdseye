import React from "react";
import "../scss/Header.scss";
import cog from '../assets/cog.png';
import Logo from '../assets/logo_purple.png'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import { AppBar, InputBase, Toolbar, Typography, withWidth } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  input: {
    color: '#FFFFF',
    width: '100%',
  },
}));

const Header = props => {
  const classes = useStyles();
  const theme = useTheme()

  return (
    <AppBar position="sticky" >
    {/* // <AppBar position={props.width !== 'xs' && props.width !== 'sm' ? 'static' : 'sticky'}  > */}

      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }} >

        <div style={{ display: 'flex', width: '70%', maxWidth: '600px', marginRight: 10 }} >
          <img src={Logo} style={{ width: 50, marginRight: 25 }} />
          <div style={{ backgroundColor: '#7857FF', display: 'flex', alignItems: 'center', padding: '0 5px', width: '100%' }} >
            <SearchIcon />
            <InputBase className={classes.input} color='#FFFFF' />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', width: 150 }}>
          <Typography style={{ color: theme.palette.primary.light, fontStyle: 'italic' }} >10 days left</Typography>
          <Typography style={{ textDecoration: 'underline' }} >Upgrade</Typography>
          <SettingsIcon />
        </div>

      </Toolbar>

    </AppBar>
  );
}

export default withWidth()(Header)




// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       search: ""
//     };
//   }

//   // Handler for entering form data to state
//   handleChange = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   // Submits form and invokes loginUser()
//   handleSubmit = e => {};

//   render() {
//     return (
//       <div className={`header-ctn ${this.props.size}`}>

//           <form className="search-form" onSubmit={this.handleSubmit}>
//             <input
//               type="search"
//               name="search"
//               onChange={this.handleChange}
//               value={this.state.username}
//               placeholder="Search"
//             />
//           </form>

//           <div className="settings">
//             <p id="daysCount">{this.props.daysLeft} days left</p>
//             <button id="upgrade">Upgrade</button>
//             <img src={cog} alt="settings" />
//           </div>
//       </div>
//     );
//   }
// }

// export default Header;
