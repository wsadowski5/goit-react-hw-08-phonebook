import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from '../../redux/contacts/operations';
import { Button } from '@mui/material';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Input from '@mui/material/Input';

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

  const handleDelete = contact => dispatch(deleteContact(contact.id));

  const handleEdit = () => setIsEdit(true);

  const handleSave = () => {
    setIsEdit(false);

    dispatch(
      editContact({ contactId: contact.id, updatedContact: { name, number } })
    );
  };

  return (
    <div>
      {isEdit ? (
        <>
          <ListItem disablePadding alignItems="center">
            <Input
              fullWidth
              placeholder="NAME"
              name="name"
              onChange={handleChange}
              value={name}
            />
            <Input
              fullWidth
              placeholder="PHONE"
              name="number"
              onChange={handleChange}
              value={number}
            />
            <Button type="button" onClick={handleSave}>
              Save
            </Button>

            <Button type="submit" onClick={() => handleDelete(contact)}>
              Delete
            </Button>
          </ListItem>
        </>
      ) : (
        <>
          <ListItem disablePadding>
            <ListItemText fullWidth
              primary={` ${contact.name} : ${contact.number}`}
            />
            <Button type="button" onClick={handleEdit}>
              Edit
            </Button>
            <Button type="submit" onClick={() => handleDelete(contact)}>
              Delete
            </Button>
          </ListItem>
        </>
      )}
    </div>
  );
};
