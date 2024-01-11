import { useDispatch, useSelector } from 'react-redux';
import { Outlet, NavLink } from 'react-router-dom';
import { selectIsLoggedIn, selectUserName } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

const LoggedInNav = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logout());

  return (
    <div>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/contacts"> Contacts</NavLink>
      Welcome {userName}
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
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
      <Outlet />
    </div>
  );
};

export default Layout;
