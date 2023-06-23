import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { PhoneBookStyle } from './app.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  resetForm() {
    return this.setState({
      name: '',
      number: '',
    });
  }

  componentDidMount() {
    if (localStorage.getItem('key')) {
      const storage = JSON.parse(localStorage.getItem('key'));
      return this.setState({ contacts: [...storage] });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      localStorage.setItem('key', JSON.stringify(this.state.contacts));
    }
  }

  onSubmit = e => {
    e.preventDefault();
    if (
      this.state.contacts.find(({ name }) => {
        return name === this.state.name;
      })
    ) {
      alert('Its allready in case');
      this.resetForm();
      return;
    }

    this.setState(prev => {
      return {
        contacts: [
          ...prev.contacts,
          { name: this.state.name, id: nanoid(), number: this.state.number },
        ],
      };
    });
    this.resetForm();
  };

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onChangeFilter = e => {
    this.setState({ filter: e.target.value });
    this.filteredContacts = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(e.target.value);
    });
  };

  onDeleteContact = e => {
    this.setState(prev => {
      const contactsAfterDelete = prev.contacts.filter(({ id }) => {
        return id !== e.target.id;
      });
      return { contacts: [...contactsAfterDelete] };
    });
  };

  render() {
    return (
      <PhoneBookStyle>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          valueName={this.state.name}
          valueNumber={this.state.number}
        />
        <h2>Contacts</h2>
        <ContactFilter
          onChange={this.onChange}
          onChangeFilter={this.onChangeFilter}
          filter={this.state.filter}
          filteredContacts={this.filteredContacts}
          contacts={this.state.contacts}
          deleteContact={this.onDeleteContact}
        />
      </PhoneBookStyle>
    );
  }
}

export { App };
