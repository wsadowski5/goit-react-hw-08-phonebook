import { useDispatch } from 'react-redux';
import css from './Filter.module.css';

import { setFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    const filter = e.target.value;
    dispatch(setFilter(filter));
  };

  return (
    <div className={css.filter}>
      <label className={css.filterItem}>
        <span>Find contacts by name</span>
        <input type="text" name="filter" onChange={handleChange} />
      </label>
    </div>
  );
};
