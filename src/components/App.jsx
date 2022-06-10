import React from 'react';
import Form from './Form/Form'
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import s from './PhoneBook.module.css';

export default class App extends React.Component{
  state = {
    contacts: [],
    filter: '',
  }  

  elemId = nanoid();
  
  formSubmitHandler = (data) =>{
    this.state.contacts.push(data);
    // console.log(this.state.contacts)
  }

  
  
  render(){
    console.log(this.state.contacts)
    return (
      <div className={s.container}>
        <h1>Phonebook</h1>
      <Form formData={this.formSubmitHandler}/> 
        <div>
          <h2>Contacts</h2>
          <ul>{this.state.contacts.map(contact =>{
            return <li key={contact.id}>{contact.name}: {contact.number}</li>
          })}
          </ul>
        </div>
      </div>
    )
  }
}