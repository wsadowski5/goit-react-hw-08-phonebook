import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { ContactListItem } from './ContactListItem';
import css from './ContactsList.module.css';

export const ContactsList = () => {
  const { contacts, isLoading } = useSelector(selectContacts);
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);
  console.log(filter)

  const filteredContacts = contacts.filter(contact =>

    contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  
  
  return (
    <div className={css.wraperContactList}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul className={css.contactList}>
          {filteredContacts.map((contact, id) => (
            <ContactListItem key={id} contact={contact} />
          ))}
        </ul>
      )}
    </div>
  );
  
  
  

};
