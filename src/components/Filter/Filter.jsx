import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { setFilter } from '../../redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    const filter = e.target.value;
    dispatch(setFilter(filter));
  };

  return (
    <Grid
    margin={4} >
      
        <TextField
          label="FILTER CONTACTS"
          variant="outlined"
          type="text"
          name="filter"
          onChange={handleChange}
        />
    
    </Grid>
  );
};
