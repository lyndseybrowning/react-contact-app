import React, { Component, PropTypes } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <input type="search" placeholder="search" value={this.props.filterText} />
    );
  }
}

SearchBar.propTypes = {
  filterText: PropTypes.string.isRequired
}

export default SearchBar;
