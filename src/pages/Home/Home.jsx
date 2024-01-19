import { Helmet } from 'react-helmet-async';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
const Home = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      marginTop={10}
    >
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Typography variant="h2">Welcome in my Phonebook</Typography>
    </Grid>
  );
};

export default Home;
