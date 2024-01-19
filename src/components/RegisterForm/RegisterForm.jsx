import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

import { Button, TextField } from '@mui/material';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleRegistration = event => {
    event.preventDefault();
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
        <TextField
          label="USERNAME"
          variant="outlined"
          name="username"
          id="username"
        ></TextField>

        <TextField
          label="EMAIL"
          variant="outlined"
          name="email"
          type="email"
          id="login-email"
        ></TextField>

        <TextField
          label="PASSWORD"
          variant="outlined"
          name="password"
          type="password"
          id="login-password"
        ></TextField>
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default RegisterForm;
