import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const RegisterForm = () => {

  const dispatch = useDispatch();

  const handleRegistration = event => {
    event.preventDefault()
    const name = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleRegistration}>
        <label htmlFor="username">Username</label>
        <input name="username" id="username"></input>
        <label htmlFor="registration-email">Email</label>
        <input name="email" type="email" id="login-email"></input>
        <label htmlFor="registration-password">Password</label>
        <input name="password" type="password" id="login-password"></input>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
