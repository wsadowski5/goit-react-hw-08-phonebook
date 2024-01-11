import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';


const Register = () => {

  const IsLoggedIn = useSelector(selectIsLoggedIn)

  if (IsLoggedIn) { 
    return <Navigate to="/contacts"/>
  }
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
};

export default Register;
