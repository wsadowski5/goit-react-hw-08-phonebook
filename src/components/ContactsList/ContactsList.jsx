import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { ContactListItem } from './ContactListItem';

export const ContactsList = () => {
  const { contacts, isLoading } = useSelector(selectContacts);
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(
    contact =>
      contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {filteredContacts.map((contact, id) => (
            <ContactListItem key={id} contact={contact} />
          ))}
        </ul>
      )}
    </div>
  );
};
