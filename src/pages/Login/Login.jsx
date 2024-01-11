import { Helmet } from 'react-helmet-async';
import LoginForm from 'components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);

  if (IsLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
};

export default Login;
