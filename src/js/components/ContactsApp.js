import React, { Component, PropTypes } from 'react';
import SearchBar from './SearchBar';
import ContactList from './ContactList';

class ContactsApp extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ContactList contacts={this.props.contacts} />
      </div>
    );
  }
}

ContactsApp.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
}

export default ContactsApp;
