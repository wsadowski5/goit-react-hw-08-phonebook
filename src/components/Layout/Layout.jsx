import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { Outlet, NavLink } from 'react-router-dom';

import { logout } from '../../redux/auth/operations';

const LoggedInNav = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logout());
  return (
    <div>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/contacts"> Contacts</NavLink>
      Welcome {user}
      <button onClick={handleLogOut}> Logout</button>
    </div>
  );
};

const LoggedOutNav = () => {
  return (
    <div>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/register"> Register </NavLink>
      <NavLink to="/login"> Login </NavLink>
    </div>
  );
};

const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
      <Outlet />
    </div>
  );
};

export default Layout;
