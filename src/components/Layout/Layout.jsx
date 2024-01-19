import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { Outlet, NavLink } from 'react-router-dom';

import { logout } from '../../redux/auth/operations';

import Tab from '@mui/material/Tab';
import { Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
const LoggedInNav = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logout());
  return (
    <div>
      <Tab LinkComponent={NavLink} to="/" label="Home" />
      <Tab LinkComponent={NavLink} to="/contacts" label="Contacts" />
      Welcome {user}
      <Button onClick={handleLogOut}> Logout</Button>
    </div>
  );
};

const LoggedOutNav = () => {
  return (
    <div>
      <Tab LinkComponent={NavLink} to="/" label="Home" />
      <Tab LinkComponent={NavLink} to="/register" label="Register" />
      <Tab LinkComponent={NavLink} to="/login" label="Login" />
    </div>
  );
};

const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Grid
    container
      direction="column"
      justifyContent="center"
      alignItems="center"
      marginTop={2}>
      {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
      <Outlet />
    </Grid>
  );
};

export default Layout;
