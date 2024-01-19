import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';

import Grid from '@mui/material/Unstable_Grid2';

import { Typography } from '@mui/material';
const Contacts = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      marginTop={10}
    >
      <Typography variant="h2">Contacts</Typography>


      <ContactForm />
      <Filter />
      <ContactsList />
    </Grid>

  );
};

export default Contacts;
