import css from './ContactForm.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { v4 as uuidv4 } from 'uuid';

import { Button, TextField } from '@mui/material';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const id = uuidv4();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ id, name, number }));
    setName('');
    setNumber('');

  };

  const handleChangeName = e => {
    const name = e.target.value;
    setName(name);
  };
  const handleChangeNumber = e => {
    const number = e.target.value;
    setNumber(number);
  };

  return (
    <div className={css.contactFormWrapper}>
      <form onSubmit={handleSubmit} className={css.contactForm}>
        <label className={css.contactFormItem}>
          <TextField
            label="NAME"
            variant="outlined"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChangeName}
          />
        </label>
        <label className={css.contactFormItem}>
          <TextField
            label="NUMBER"
            variant="outlined"
            type="tel"
            name="number"
            value={number}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChangeNumber}
          />
        </label>
        <Button type="submit">Add contact</Button>
      </form>
    </div>
  );
};
