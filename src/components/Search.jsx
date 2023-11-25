import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Search</h1>
        <input type="search" className="search" onChange={this.props.handleChange} placeholder="Search food" />
      </div>
    );
  }
}

export default Search;
