

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';




export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <div className={css.container}>
    <h1 className={css.title}>Phonebook</h1>
    <ContactForm />
    <h2 className={css.title}>Contacts</h2>
    <Filter />
    {isLoading ? (
      <p>Loading...</p>
    ) : error ? (
      <p>Error: {error}</p>
    ) : (
      <ContactList />
    )}
  </div>
  )
  };