import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';

import css from 'components/App.module.css';

const Contacts = () => {

  return (
    <div className={css.container}>
      <h1 className={css.containerHeader}>Phonebook</h1>
      <h2>Add contact</h2>
      <ContactForm />
      <Filter />
      <ContactsList />
    </div>
  );
};

export default Contacts;
