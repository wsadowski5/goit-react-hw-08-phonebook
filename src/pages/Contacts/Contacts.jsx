import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import css from 'components/App.module.css';

const Contacts = () => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);

  if (!IsLoggedIn) {
    return <Navigate to="/login" />;
  }

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
