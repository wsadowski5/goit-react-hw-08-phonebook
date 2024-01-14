import { useSelector } from 'react-redux';

import {
  selectIsLoggedIn,
  selectUserName,
  selectIsRefreshing,
} from '../redux/auth/selectors.js';

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUserName);


return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};