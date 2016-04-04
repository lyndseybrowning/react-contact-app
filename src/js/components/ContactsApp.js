import React, { Component, PropTypes } from 'react';
import SearchBar from './SearchBar';
import ContactList from './ContactList';

class ContactsApp extends Component {

  constructor() {
    super();
    this.state = {
      filterText: ''
    };
  }

  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} />
        <ContactList contacts={this.props.contacts} />
      </div>
    );
  }
}

ContactsApp.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
}

export default ContactsApp;
