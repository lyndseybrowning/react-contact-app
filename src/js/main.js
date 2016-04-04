import React, { Component } from 'react';
import { render } from 'react-dom';
import ContactsApp from './components/ContactsApp';

let contacts = [
  { name: "Cassio Zen", email: "cassiozen@gmail.com" },
  { name: "Lyndsey Browning", email: "lbrowning86@gmail.com" },
  { name: "Dan Abramov", email: "gaearon@somewhere.com" },
  { name: "Pete Hunt", email: "floydophone@somewhere.com" },
];

render(<ContactsApp contacts={contacts} />, document.getElementById('app'));
