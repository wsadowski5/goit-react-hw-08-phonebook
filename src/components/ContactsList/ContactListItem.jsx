import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from '../../redux/contacts/operations';

export const ContactListItem = ({ contact }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'number':
        setNumber(value);
        return;
      default:
        return;
    }
  };


  const handleDelete = contact => dispatch(deleteContact(contact.id))

  const handleEdit = () => setIsEdit(true);

  const handleSave = () => {
    setIsEdit(false);
  
    dispatch(editContact({ contactId: contact.id, updatedContact: { name, number } }));

  };

  return (
    <li>
      {isEdit ? (
        <>
          <label>
            Name
            <input
              onChange={handleChange} name="name" type="text" value={name}
            />
          </label>
          <label>
            Number
            <input
              onChange={handleChange} name="number" type="text" value={number}
            />
          </label>
        </>
      ) : (
        <>
          <span>{contact.name}</span>
          <span>{contact.number}</span>
        </>
      )}

      <button type="button" onClick={handleEdit}>
        Edit
      </button>

      <button type="button" onClick={handleSave}>
        Save
      </button>

       <button type="submit" onClick={() => handleDelete(contact)}>
        Delete
      </button>
    </li>
  );
};
