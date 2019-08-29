import React from "react";
import "../scss/Header.scss";
import cog from '../assets/cog.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  // Handler for entering form data to state
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Submits form and invokes loginUser()
  handleSubmit = e => {};

  render() {
    return (
      <div className={`header-ctn ${this.props.size}`}>

          <form className="search-form" onSubmit={this.handleSubmit}>
            <input
              type="search"
              name="search"
              onChange={this.handleChange}
              value={this.state.username}
              placeholder="Search"
            />
          </form>

          <div className="settings">
            <p id="daysCount">{this.props.daysLeft} days left</p>
            <button id="upgrade">Upgrade</button>
            <img src={cog} alt="settings" />
          </div>
      </div>
    );
  }
}

export default Header;
