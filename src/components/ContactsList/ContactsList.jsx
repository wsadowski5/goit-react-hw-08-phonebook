import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { fetchContacts, deleteContact } from '../../redux/operations';

import css from './ContactsList.module.css';

export const ContactsList = () => {
  const { contacts, isLoading, error } = useSelector(selectContacts);
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);
  console.log(filter)

  const filteredContacts = contacts.filter(contact =>

    contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = contact =>   dispatch(deleteContact(contact.id))
  return (
    <div className={css.contactListWrapper}>
      {error && <p>{error}</p>}

      {isLoading ? (
        <div>Loading contacts...</div>
      ) : (
        <ul className={css.contactsList}>
          {filteredContacts.map(contact => (
            <li className={css.contactListItem} key={contact.id}>
              {' '}
              <span>
                {contact.name}: {contact.phone}{' '}
              </span>
              <button type="submit" onClick={() => handleDelete(contact)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
