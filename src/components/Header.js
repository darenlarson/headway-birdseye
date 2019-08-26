import React from "react";
import "../css/Header.css";

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
      <div className="header-ctn">

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
            <div id="upgrade">Upgrade</div>
            <div id="settings">Set</div>
          </div>
      </div>
    );
  }
}

export default Header;
