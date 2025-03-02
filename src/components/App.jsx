import s from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import {useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <SearchBox/>
      <ContactForm/>
      <ContactList/>
    </div>
  );
};

export default App;
