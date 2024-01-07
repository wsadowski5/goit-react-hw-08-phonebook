import { ContactsList } from './ContactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <h1 className={css.containerHeader}>Phonebook</h1>
      <h2>Add contact</h2>
      <h2>Hello World !</h2>
      <ContactForm />
      <h2>Contacts test</h2>
      <Filter />

      <ContactsList />
    </div>
  );
};
